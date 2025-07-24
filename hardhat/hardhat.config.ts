import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const PRIVATE_KEY = vars.get("PRIVATE_KEY")
const ALCHEMY_PRIVATE_KEY = vars.get("ALCHEMY_PRIVATE_KEY");
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");
const config: HardhatUserConfig = {
  // defaultNetwork: "testnet",
  // networks: {
  //   hardhat: {},
  //   sepolia: {
  //     url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_PRIVATE_KEY}`,
  //     accounts: [`0x${PRIVATE_KEY}`]
  //   },
  //   testnet: {
  //     url: "https://rpc.test2.btcs.network",
  //     accounts: [PRIVATE_KEY],
  //     chainId: 1114,
  //   },
  // },
  // etherscan: {
  //   apiKey: ETHERSCAN_API_KEY
  // },
  // solidity: {
  //   compilers: [
  //     {
  //       version: "0.8.22",
  //       settings: {
  //         evmVersion: "shanghai",
  //         optimizer: {
  //           enabled: true,
  //           runs: 200,
  //         },
  //       },
  //     },
  //   ],
  // },
  // paths: {
  //   sources: "./contracts",
  //   cache: "./cache",
  //   artifacts: "./artifacts",
  // },

   solidity: {
  version: "0.8.22",
  settings: {
    metadata: {
      bytecodeHash: "none",
    },
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
},
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_PRIVATE_KEY}`,
      accounts:[PRIVATE_KEY],
    },
    // infura: {
    //   url: process.env.INFURA_RPC_URL,
    //   accounts: [process.env.PRIVATE_KEY!],
    // },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;