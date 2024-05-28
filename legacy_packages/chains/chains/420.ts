import type { Chain } from "../src/types";
export default {
  "chain": "ETH",
  "chainId": 420,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://optimism-goerli.blockscout.com",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
        "width": 551,
        "height": 540,
        "format": "png"
      }
    }
  ],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "infoURL": "https://optimism.io",
  "name": "Optimism Goerli Testnet",
  "nativeCurrency": {
    "name": "Goerli Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 420,
  "redFlags": [],
  "rpc": [
    "https://420.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://goerli.optimism.io",
    "https://optimism-goerli-rpc.publicnode.com",
    "wss://optimism-goerli-rpc.publicnode.com",
    "https://optimism-goerli.gateway.tenderly.co",
    "wss://optimism-goerli.gateway.tenderly.co",
    "https://optimism-testnet.drpc.org",
    "wss://optimism-testnet.drpc.org"
  ],
  "shortName": "ogor",
  "slip44": 1,
  "slug": "optimism-goerli",
  "status": "deprecated",
  "testnet": true
} as const satisfies Chain;