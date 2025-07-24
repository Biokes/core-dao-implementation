async function deploy() { 
    const hre = require("hardhat");
    const Storage = await hre.ethers.getContractFactory("Storage");
    const storage = await Storage.deploy();
    console.log("Storage contract wallet address: ", storage);
    return storage;
}
deploy().catch((error) => { 
    console.error("Error during deployment: ", error);
    process.exitCode = 1;
});
