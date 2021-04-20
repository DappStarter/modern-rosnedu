require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue rice saddle horse grace casual equal gauge'; 
let testAccounts = [
"0x812eaf934562ef2db31769aa45ccb1bcbe76fca083cb9908360518b02383ec34",
"0x5d0a7d7fca95b5999aecc043e550ed0c8fa365fdb36bfc3073ab83b992da8a62",
"0x05713a123afe985f3ee9406e0edcc31f3cfa6025bcbccc85331c4589f8f5015b",
"0x4132ef9c5db2e0e01aeb854e0c23c7974dd8857684cee68b4d90b8684e3c7b33",
"0x1f3c7f63872c49f89bdd2907fe242b79f5a5d89c090b9e73d58079b2b4166d71",
"0xb9f877a6eae0607efb7582436b66fc5ba62f0e22c2356fe07cc324b6f5123787",
"0xbb170991bacc99d8553b2fe54b2a262b98a5c870edf46e80b91da940ec699673",
"0x5972fbfac9ae72d657fb4eebc4306fd7d0a0c7d0bd8c2b9b999544fae3fb8dfc",
"0x9497723a7510b494c17d144eb0367b2aa0404939eda7e247ecb190b7b6c67de0",
"0xa5b0be55ed45ddd327c890d2fc9a6f74145b65d31ebe90583def113127ce50b6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
