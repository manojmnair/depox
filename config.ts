import { createConfig, http } from 'wagmi';
import { injected, metaMask } from 'wagmi/connectors';
import { localhost, polygonZkEvmCardona, sepolia } from 'wagmi/chains';



declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}



export const config = createConfig({
  chains: [polygonZkEvmCardona, sepolia, localhost],
  connectors: [metaMask(), injected()],
  transports: {
    [polygonZkEvmCardona.id]: http(),
    [sepolia.id]: http(),
    [localhost.id]: http(),
  },
  ssr: true
});
