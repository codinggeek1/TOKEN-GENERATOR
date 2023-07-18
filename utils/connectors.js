import { InjectedConnector } from "@web3-react/injected-connector";

const injected = new InjectedConnector({
  supportedChainIds: [80001]
});


export const connectors = {
  injected: injected
};
