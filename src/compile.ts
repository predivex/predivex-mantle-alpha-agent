import { compileRegistry } from "./compiler";

const compiled = await compileRegistry();

console.log(
  JSON.stringify(
    {
      contract: "PredivexDecisionRegistry",
      abiEntries: compiled.abi.length,
      bytecodeBytes: (compiled.bytecode.length - 2) / 2,
    },
    null,
    2,
  ),
);
