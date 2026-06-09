import path from "node:path";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { config as loadEnv } from "dotenv";

export const ROOT_DIR = path.resolve(import.meta.dirname, "..");

loadEnv({ path: path.join(ROOT_DIR, ".env") });

export const MANTLE_SEPOLIA = {
  chainId: 5003,
  name: "Mantle Sepolia",
  rpcUrl: process.env["MANTLE_RPC_URL"] ?? "https://rpc.sepolia.mantle.xyz",
  explorerBaseUrl:
    process.env["MANTLE_EXPLORER_URL"] ?? "https://explorer.sepolia.mantle.xyz",
};

export const AGENT_ID =
  process.env["MANTLE_AGENT_ID"] ?? "predivex-mantle-alpha-agent";
export const DECISION_REGISTRY_ADDRESS =
  process.env["MANTLE_DECISION_REGISTRY_ADDRESS"] ??
  "0x7DA2bC98E2392810a1f088955C65c72EBc76692A";

export const TMP_DIR = path.join(ROOT_DIR, ".tmp");
export const DEPLOYMENT_FILE = path.join(
  TMP_DIR,
  "mantle-agent-deployment.json",
);
export const ANCHORS_FILE = path.join(TMP_DIR, "mantle-agent-anchors.json");

export type DeploymentInfo = {
  chainId: number;
  network: string;
  address: string;
  deployTxHash: string;
  explorerUrl: string;
  agentId: string;
  deployedAt: string;
};

export function normalizePrivateKey(value: string | undefined): string {
  if (!value) {
    throw new Error(
      "MANTLE_PRIVATE_KEY is required for deploy/anchor. Keep it in local env, never in git.",
    );
  }
  const trimmed = value.trim();
  return trimmed.startsWith("0x") ? trimmed : `0x${trimmed}`;
}

export function txUrl(txHash: string): string {
  return `${MANTLE_SEPOLIA.explorerBaseUrl.replace(/\/$/, "")}/tx/${txHash}`;
}

export function addressUrl(address: string): string {
  return `${MANTLE_SEPOLIA.explorerBaseUrl.replace(/\/$/, "")}/address/${address}`;
}

export async function writeJsonFile(filePath: string, value: unknown) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export async function readDeploymentInfo(): Promise<DeploymentInfo> {
  try {
    const raw = await readFile(DEPLOYMENT_FILE, "utf8");
    return JSON.parse(raw) as DeploymentInfo;
  } catch {
    return {
      chainId: MANTLE_SEPOLIA.chainId,
      network: MANTLE_SEPOLIA.name,
      address: DECISION_REGISTRY_ADDRESS,
      deployTxHash: "",
      explorerUrl: addressUrl(DECISION_REGISTRY_ADDRESS),
      agentId: AGENT_ID,
      deployedAt: "",
    };
  }
}
