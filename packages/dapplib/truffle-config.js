require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strong radar often mistake hidden clinic equal gentle'; 
let testAccounts = [
"0x09853d0e59f11787c665fa40b71d1edfa66ea929e75fea9e98dcf0533185ab6c",
"0x285ab80a996db12397771756eaed48e5982e247795eb7743362b654756a2d653",
"0xc1fd7d3b9f295262f71b27a051658ea6a86fe5c1446e73277c74944971a068dc",
"0xbdc3d7ae8890b91f8c117efc5e28277e602c7154fb5d385d3318ce7751574cb8",
"0x4dadf3a42dc7dbdc01614a58fdccf262689756881fc12d0ab3061c91200f0e85",
"0x2f47c15bd60a051486f871dfa55d608126191c0d6ca5130dfe6cb73443d153dd",
"0x0afaf031de57e77799577f02218fbc4ed38826eb9ddd31d6cc5bf799e88eea89",
"0x2bc8726eae00871391feca064f624a54f072cdba251cb7241dda7b137f3ba785",
"0x96eaa28e423ee9c73ef7b9cc2958c63c60457e14b5bc188060596aaa1d697cb8",
"0xafc50c45a5037d8de44665a9f13868d2591bc3e38a78247f23220525abe73ad0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

