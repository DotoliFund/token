import { HardhatRuntimeEnvironment } from "hardhat/types"
import { ethers } from "hardhat"

async function main() {
  const [account] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", account.address);
  console.log("Account balance:", (await account.getBalance()).toString());

  const DotoliToken = await ethers.getContractFactory("DotoliToken");
  const token = await DotoliToken.deploy();
  await token.deployed();
  console.log("DotoliToken address : ", token.address);
  console.log("Account balance:", (await account.getBalance()).toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});