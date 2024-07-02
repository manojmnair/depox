import 'dotenv/config';
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-foundry';
import { HardhatUserConfig } from 'hardhat/config';
import process from 'process';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.24',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000
          },
        }
      }
    ]
  },
    ignition: {
    requiredConfirmations: 1
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './build/cache',
    artifacts: './build/artifacts'
  },
  gasReporter: {
    enabled: true,
    outputFile: './test/gas-report.txt',
    noColors: true
  },
  networks: {
    localhost: {
      chainId: 31337,
      url: 'http://localhost:8545'
    },
    sepolia: {
      url: 'https://ethereum-sepolia-rpc.publicnode.com',
      chainId: 11155111,
      accounts: [`0x${process.env.SEPOLIA_PRIVATE_KEY}`]
    },
     polygonZkEvmCardona: {
      url: 'https://rpc.cardona.zkevm-rpc.com',
      chainId: 2442,
      accounts: [`0x${process.env.POLYGONZKEVMCARDONA_PRIVATE_KEY}`]
    },
  }
};

export default config;
