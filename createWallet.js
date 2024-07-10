// generate_wallets.js

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://####/v3/YOUR_PROJECT_ID'));

const numWallets = 10; // Number of wallets to generate
const mnemonic = 'YOUR_MNEMONIC_PHRASE'; // Mnemonic phrase for wallet generation

async function generateWallets() {
const wallets = [];
for (let i = 0; i < numWallets; i++) {
const wallet = web3.eth.accounts_wallet.generate(mnemonic, i);
wallets.push(wallet);
}
return wallets;
}

generateWallets().then((wallets) => {
console.log('Generated wallets:');
wallets.forEach((wallet, index) => {
console.log(`Wallet ${index + 1}:`);
console.log(`Address: ${wallet.address}`);
console.log(`Private key: ${wallet.privateKey}`);
console.log('');
});
});
