## An example cypress configuration for testing with Dynamic SDK

This repo contains a working example of testing https://demo.dynamic.xyz by authenticating with a mocked MetaMask wallet.

We utilize several libraries to make this happen, namely `@rsksmart/mock-web3-provider` which is a very simple library for mocking the MetaMask event hooks. Additionally we use `ethers` to generate a new wallet, mock our `window.ethereum` and then we able to select MetaMask wallet in the Dynamic SDK.

## Getting Started

```
git clone git@github.com:dynamic-labs/cypress-example.git
cd cypress-example
npm install
npm run test
```

Additionally you can open the full cypress window with:
```
npm run open
```


