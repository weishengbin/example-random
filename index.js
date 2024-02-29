// import
const Web3 = require('web3');

// uri
const ethereumUri = 'NODE_URI';

// create web3 client
const web3 = new Web3(new Web3.providers.HttpProvider(ethereumUri));

// the block height
web3.eth.getBlockNumber().then(blockNumber => {
    console.log('block height: ', blockNumber);
}).catch(error => {
    console.error('get block height error: ', error);
});

// get balance
const address = 'YOUR_EVM_ADDRESS';

web3.eth.getBalance(address).then(balance => {
    console.log('balance: ', web3.utils.fromWei(balance, 'ether'), 'ETH');
}).catch(error => {
    console.error('get balance error: ', error);
});