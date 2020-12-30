// import { config as dotEnvConfig } from "dotenv";
// dotEnvConfig();

import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle"; // without this line hardhat does not work
import "hardhat-typechain";

import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy-ethers";
import "hardhat-deploy";
import "@symfoni/hardhat-react";
import "@typechain/ethers-v5";

// import "@nomiclabs/hardhat-etherscan";
// TODO: reenable solidity-coverage when it works
// import "solidity-coverage";

// const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
// const RINKEBY_PRIVATE_KEY =
//   process.env.RINKEBY_PRIVATE_KEY! ||
//   "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"; // well known private key
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const config: HardhatUserConfig = {
  // defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      { version: "0.6.8", settings: {} },
      { version: "0.7.3", settings: {} }
    ],
  },
  // networks: {
  //   hardhat: {},
  //   localhost: {},
  //   rinkeby: {
  //     url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
  //     accounts: [RINKEBY_PRIVATE_KEY],
  //   },
  //   coverage: {
  //     url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
  //   },
  // },
  // etherscan: {
  //   // Your API key for Etherscan
  //   // Obtain one at https://etherscan.io/
  //   apiKey: ETHERSCAN_API_KEY,
  // },
  // }
  react: {
    providerPriority: ["web3modal", "hardhat"],
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    deployments: "./hardhat/deployments",
    react: "./frontend/hardhat"
  },
  typechain: {
    outDir: "./frontend/hardhat", // TODO put this out of frontend
    target: "ethers-v5"
  }
};

export default config;