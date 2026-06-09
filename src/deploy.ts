import { ContractFactory, JsonRpcProvider, Wallet } from "ethers";
import { compileRegistry } from "./compiler";
import {
  AGENT_ID,
  DEPLOYMENT_FILE,
  MANTLE_SEPOLIA,
  addressUrl,
  normalizePrivateKey,
  txUrl,
  writeJsonFile,
  type DeploymentInfo,
} from "./config";

const privateKey = normalizePrivateKey(process.env["MANTLE_PRIVATE_KEY"]);
const provider = new JsonRpcProvider(
  MANTLE_SEPOLIA.rpcUrl,
  MANTLE_SEPOLIA.chainId,
);
const wallet = new Wallet(privateKey, provider);
const compiled = await compileRegistry();

console.log(`Deploying PredivexDecisionRegistry to ${MANTLE_SEPOLIA.name}...`);
console.log(`Deployer: ${wallet.address}`);

const factory = new ContractFactory(compiled.abi, compiled.bytecode, wallet);
const contract = await factory.deploy(AGENT_ID);
const deploymentTx = contract.deploymentTransaction();

await contract.waitForDeployment();
const address = await contract.getAddress();

const info: DeploymentInfo = {
  chainId: MANTLE_SEPOLIA.chainId,
  network: MANTLE_SEPOLIA.name,
  address,
  deployTxHash: deploymentTx?.hash ?? "",
  explorerUrl: addressUrl(address),
  agentId: AGENT_ID,
  deployedAt: new Date().toISOString(),
};

await writeJsonFile(DEPLOYMENT_FILE, info);

console.log(JSON.stringify(info, null, 2));
if (deploymentTx?.hash) {
  console.log(`Deploy tx: ${txUrl(deploymentTx.hash)}`);
}
