import type { Chain } from "../src/types";
export default {
  "chain": "Bloom",
  "chainId": 333313,
  "explorers": [
    {
      "name": "Bloom Genesis Mainnet",
      "url": "https://explorer.bloomgenesis.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://www.bloomgenesis.com",
  "name": "Bloom Genesis Mainnet",
  "nativeCurrency": {
    "name": "Bloom",
    "symbol": "BGBC",
    "decimals": 18
  },
  "networkId": 333313,
  "rpc": [
    "https://333313.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://mainnet-rpc.bloomgenesis.com"
  ],
  "shortName": "BGBC",
  "slug": "bloom-genesis",
  "testnet": false
} as const satisfies Chain;