const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'interest pen tennis young evil tourist chair message glide utility ball nation',
    'https://rinkeby.infura.io/v3/70fccd2f99574991a820bb120b62916f'

);

const web3 = new Web3(provider);

const deploy = async () =>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account: ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode, arguments:[]})
        .send({gas:'1000000', from:accounts[0]});
    console.log(interface);
    console.log('Contract deployed to', result.options.address);
};
deploy();
