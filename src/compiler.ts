import path from "node:path";
import { readFile } from "node:fs/promises";
import type { InterfaceAbi } from "ethers";
import solc from "solc";

const CONTRACT_FILE = "PredivexDecisionRegistry.sol";
const CONTRACT_NAME = "PredivexDecisionRegistry";

export type CompiledRegistry = {
  abi: InterfaceAbi;
  bytecode: `0x${string}`;
};

export async function compileRegistry(): Promise<CompiledRegistry> {
  const contractPath = path.resolve(
    import.meta.dirname,
    "..",
    "contracts",
    CONTRACT_FILE,
  );
  const source = await readFile(contractPath, "utf8");
  const input = {
    language: "Solidity",
    sources: {
      [CONTRACT_FILE]: { content: source },
    },
    settings: {
      optimizer: { enabled: true, runs: 200 },
      outputSelection: {
        "*": {
          "*": ["abi", "evm.bytecode.object"],
        },
      },
    },
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input))) as {
    errors?: Array<{ severity: string; formattedMessage: string }>;
    contracts?: Record<
      string,
      Record<
        string,
        { abi: InterfaceAbi; evm: { bytecode: { object: string } } }
      >
    >;
  };

  const errors = output.errors?.filter((error) => error.severity === "error");
  if (errors?.length) {
    throw new Error(errors.map((error) => error.formattedMessage).join("\n"));
  }

  const compiled = output.contracts?.[CONTRACT_FILE]?.[CONTRACT_NAME];
  if (!compiled?.evm.bytecode.object) {
    throw new Error("Solidity compiler did not return registry bytecode.");
  }

  return {
    abi: compiled.abi,
    bytecode: `0x${compiled.evm.bytecode.object}`,
  };
}
