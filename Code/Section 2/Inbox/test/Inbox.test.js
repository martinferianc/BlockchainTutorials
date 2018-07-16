const assert = require('assert');

//Ganache is only for a local test network
const ganache = require('ganache-cli');

//Constructor for web3
const Web3 = require('web3');

//Creates an instance and connect it to the local test network
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile')

let accounts;
let inbox;

beforeEach(async ()=> {
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();

            //Teaches web3 about what methods an
            // Inbox contract has
    inbox = await new web3.eth.Contract(JSON.parse(interface)) //<- inbox represents the contract directly

            // Tells web3 that we want to
            // deploy a new contract
        .deploy({data:bytecode, arguments:['Hi there!']})

            // Instructs web3 to send out a
            // transaction that creates this
            // contract
        .send({from: accounts[0], gas:'1000000'})
});

describe('Index',()=>{
    it('Address assigned', ()=>{
        
        assert.ok(inbox.options.address);
    });
})




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
