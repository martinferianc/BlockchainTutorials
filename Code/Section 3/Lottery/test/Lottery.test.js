const assert = require('assert');

//Ganache is only for a local test network
const ganache = require('ganache-cli');

//Constructor for web3
const Web3 = require('web3');

//Creates an instance and connect it to the local test network
const provider = ganache.provider();
const web3 = new Web3(provider);

const {interface, bytecode} = require('../compile')

let accounts;
let lottery;
beforeEach(async ()=> {
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();

            //Teaches web3 about what methods an
            // Inbox contract has
    lottery = await new web3.eth.Contract(JSON.parse(interface)) //<- inbox represents the contract directly

            // Tells web3 that we want to
            // deploy a new contract
        .deploy({data:bytecode, arguments:[})

            // Instructs web3 to send out a
            // transaction that creates this
            // contract
        .send({from: accounts[0], gas:'1000000'})

    inbox.setProvider(provider);
});

describe('Lottery',()=>{
    it('Address assigned', ()=>{
        assert.ok(inbox.options.address);
    });

    it('Manager assigned', async ()=>{
        const manager = await lottery.methods.manager().call();
        assert.equal(manager, accounts[0]);
    });
    /*
    it('Can change the message', async ()=>{
        const NEW_MESSAGE = 'Hello';
        await inbox.methods.setMessage(NEW_MESSAGE).send({from: accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message, NEW_MESSAGE);
    });
    */
});
