import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    mainnet: {
      url: process.env.ALCHEMY_LINK,
      accounts: [
        process.env.METAMASK_KEY !== undefined ? process.env.METAMASK_KEY : "",
      ],
    },
  },
};

export default config;
