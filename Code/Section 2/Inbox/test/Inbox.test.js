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
let inbox;
const INITIAL_STRING = 'Hi there!'

beforeEach(async ()=> {
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();

            //Teaches web3 about what methods an
            // Inbox contract has
    inbox = await new web3.eth.Contract(JSON.parse(interface)) //<- inbox represents the contract directly

            // Tells web3 that we want to
            // deploy a new contract
        .deploy({data:bytecode, arguments:[INITIAL_STRING]})

            // Instructs web3 to send out a
            // transaction that creates this
            // contract
        .send({from: accounts[0], gas:'1000000'})

    inbox.setProvider(provider);
});

describe('Inbox',()=>{
    it('Address assigned', ()=>{
        assert.ok(inbox.options.address);
    });

    it('Default message', async ()=>{
        const message = await inbox.methods.message().call();
        assert.equal(message, INITIAL_STRING);
    });

    it('Can change the message', async ()=>{
        const NEW_MESSAGE = 'Hello';
        await inbox.methods.setMessage(NEW_MESSAGE).send({from: accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message, NEW_MESSAGE);
    });
});




/*
class Car {

    park(){
        return 'stopped';
    }
    drive(){
        return 'vroom';
    }
    constructor() {

    }
}

let car;

// Setup the test framework
beforeEach(()=>{
    car = new Car();
});

//Groupt tests together
describe('Car', ()=>{
    //Individual test cases
    it('TestPark', ()=>{
        assert.equal(car.park(),'stopped');
    });
    it('TestDrive', ()=>{
        assert.equal(car.drive(),'vroom');
    });
});
*/
