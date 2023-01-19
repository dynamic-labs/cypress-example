/// <reference types="cypress" />
import { MockProvider } from '@rsksmart/mock-web3-provider';
import { generateEthWallet } from './shared';

describe('test', () => {
  it('visits', () => {
    const { address, privateKeyHex } = generateEthWallet();
    const metamaskProvider = new MockProvider({
      address,
      privateKey: privateKeyHex,
      networkVersion: 1,
    });
    cy.task('log', privateKeyHex);

    cy.visit('https://demo.dynamic.xyz', {
      onBeforeLoad(win) {
        Object.defineProperty(win, 'ethereum', { value: metamaskProvider });
        Object.defineProperty(win, 'test', { value: 'test abc' });
      },
    });
    cy.wait(2000);
    cy.window().then((win) => {
      cy.wait(5000);
      cy.contains('Connect your wallet').click();
      cy.wait(2000);
      cy.contains('MetaMask').click();
      cy.wait(2000);
      cy.contains('user').click();
    });
  });
});
