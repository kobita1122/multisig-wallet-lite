const hre = require("hardhat");

async function main() {
  const [owner1, owner2, owner3] = await hre.ethers.getSigners();
  const owners = [owner1.address, owner2.address, owner3.address];
  const threshold = 2;

  const wallet = await hre.ethers.deployContract("MultiSigWallet", [owners, threshold]);
  await wallet.waitForDeployment();

  console.log("MultiSig Wallet deployed to:", await wallet.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
