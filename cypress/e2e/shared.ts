import { Wallet } from "ethers";

export const generateEthWallet = (): {
  address: string;
  privateKey: string;
  privateKeyHex: string;
} => {
  const wallet = Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
    privateKeyHex: wallet.privateKey.substring(2),
  };
};
