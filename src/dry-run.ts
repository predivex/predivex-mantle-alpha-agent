import { id } from "ethers";
import { compileRegistry } from "./compiler";

const compiled = await compileRegistry();
const sample = {
  agentId: "predivex-mantle-alpha-agent",
  decisionId: "sample-decision",
  proofHash: id("sample-predivex-mantle-agent-decision"),
};

console.log(
  JSON.stringify(
    {
      contract: "PredivexDecisionRegistry",
      bytecodeBytes: (compiled.bytecode.length - 2) / 2,
      abiEntries: compiled.abi.length,
      sample,
    },
    null,
    2,
  ),
);
