import { readFile } from "node:fs/promises";
import { Contract, JsonRpcProvider, Wallet } from "ethers";
import { compileRegistry } from "./compiler";
import {
  ANCHORS_FILE,
  MANTLE_SEPOLIA,
  normalizePrivateKey,
  readDeploymentInfo,
  txUrl,
  writeJsonFile,
} from "./config";

type AgentDecision = {
  id: string;
  proofHash: string;
  snapshot?: DecisionSnapshot;
};

type AgentPayload = {
  decisions: AgentDecision[];
};

type AnchorRecord = {
  decisionId: string;
  proofHash: string;
  txHash: string;
  explorerUrl: string;
  recordedAt: string;
  snapshot?: DecisionSnapshot;
};

type DecisionSnapshot = {
  kind: "cross_venue_spread" | "momentum_dislocation";
  marketId: string;
  title: string;
  side: "YES" | "NO" | "PAIR";
  edgeBps: number;
  confidence: number;
  venue: string;
  counterVenue?: string;
  observedValue: number;
  observedUnit: "probability" | "edge_bps";
  yesPrice?: number;
  noPrice?: number;
  observedAt: string;
};

async function loadExistingAnchorRecords(): Promise<AnchorRecord[]> {
  try {
    const raw = await readFile(ANCHORS_FILE, "utf8");
    const parsed = JSON.parse(raw) as AnchorRecord[];
    return Array.isArray(parsed)
      ? parsed.filter((record) => record.decisionId && record.txHash)
      : [];
  } catch {
    return [];
  }
}

const apiUrl =
  process.env["PREDIVEX_MANTLE_AGENT_API_URL"] ??
  "http://127.0.0.1:8080/api/mantle/alpha-agent";
const limit = Math.max(1, Number(process.env["MANTLE_ANCHOR_LIMIT"] ?? "5"));
const privateKey = normalizePrivateKey(process.env["MANTLE_PRIVATE_KEY"]);
const deployment = await readDeploymentInfo();
const compiled = await compileRegistry();
const provider = new JsonRpcProvider(
  MANTLE_SEPOLIA.rpcUrl,
  MANTLE_SEPOLIA.chainId,
);
const wallet = new Wallet(privateKey, provider);
const contract = new Contract(deployment.address, compiled.abi, wallet);

const response = await fetch(apiUrl);
if (!response.ok) {
  throw new Error(
    `Failed to fetch agent decisions from ${apiUrl}: ${response.status}`,
  );
}

const payload = (await response.json()) as AgentPayload;
const decisions = payload.decisions.slice(0, limit);
const recordsByDecisionId = new Map(
  (await loadExistingAnchorRecords()).map((record) => [
    record.decisionId,
    record,
  ]),
);
const newRecords: AnchorRecord[] = [];

for (const decision of decisions) {
  const proofHash = decision.proofHash.startsWith("0x")
    ? decision.proofHash
    : `0x${decision.proofHash}`;
  const alreadyRecorded = await contract.isRecorded(proofHash);
  if (alreadyRecorded) {
    const existing = recordsByDecisionId.get(decision.id);
    if (
      existing &&
      !existing.snapshot &&
      existing.proofHash === decision.proofHash
    ) {
      recordsByDecisionId.set(decision.id, {
        ...existing,
        snapshot: decision.snapshot,
      });
    }
    console.log(`Already anchored: ${decision.id}`);
    continue;
  }

  const metadataUri = `predivex://mantle-agent/${encodeURIComponent(decision.id)}`;
  const tx = await contract.recordDecision(proofHash, decision.id, metadataUri);
  console.log(`Anchoring ${decision.id}: ${tx.hash}`);
  await tx.wait();

  const record = {
    decisionId: decision.id,
    proofHash: decision.proofHash,
    txHash: tx.hash,
    explorerUrl: txUrl(tx.hash),
    recordedAt: new Date().toISOString(),
    snapshot: decision.snapshot,
  };
  recordsByDecisionId.set(decision.id, record);
  newRecords.push(record);
}

const records = [...recordsByDecisionId.values()];
await writeJsonFile(ANCHORS_FILE, records);
console.log(
  JSON.stringify(
    { anchored: newRecords.length, totalLocalAnchors: records.length, records },
    null,
    2,
  ),
);
