const assert = require('assert');

//Ganache is only for a local test network
const ganache = require('ganache-cli');

//Constructor for web3
const Web3 = require('web3');

//Creates an instance and connect it to the local test network
const provider = ganache.provider();
const web3 = new Web3(provider);

const {
  interface,
  bytecode
} = require('../compile')

let accounts;
let lottery;
beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //Teaches web3 about what methods an
  // Inbox contract has
  lottery = await new web3.eth.Contract(JSON.parse(interface)) //<- inbox represents the contract directly

    // Tells web3 that we want to
    // deploy a new contract
    .deploy({
      data: bytecode
    })

    // Instructs web3 to send out a
    // transaction that creates this
    // contract
    .send({
      from: accounts[0],
      gas: '1000000'
    })

  lottery.setProvider(provider);
});

describe('Lottery', () => {
  it('Deploys a contract', () => {
    assert.ok(lottery.options.address);
  });

  it('Allows one account to enter', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('0.02', 'ether')
    });
    const addressArray = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });
    assert.equal(accounts[0], addressArray[0]);
    assert.equal(1, addressArray.length);
  });

  it('Allows multiple accounts to enter', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('0.02', 'ether')
    });
    await lottery.methods.enter().send({
      from: accounts[1],
      value: web3.utils.toWei('0.02', 'ether')
    });
    await lottery.methods.enter().send({
      from: accounts[2],
      value: web3.utils.toWei('0.02', 'ether')
    });

    const addressArray = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });
    assert.equal(accounts[0], addressArray[0]);
    assert.equal(accounts[1], addressArray[1]);
    assert.equal(accounts[2], addressArray[2]);

    assert.equal(3, addressArray.length);
  });

  it('Requires a minimum amount of ether', async () => {
    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        value: 200
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });
  it('Only manager can pick winner', async () => {
    try {
      await lottery.methods.pickWinner().send({
        from: accounts[1]
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('End-to-End test', async () => {
    try {
      const initialBalance = await web3.eth.getBalance(accounts[1]);

      await lottery.methods.enter().send({
        from: accounts[1],
        value: web3.utils.toWei('2', 'ether')
      });

      const closingBalance = await web3.eth.getBalance(accounts[1]);

      const difference = initialBalance - closingBalance;
      assert(difference > web3.utils.toWei('1.8', 'ether'));

    } catch (err) {
      assert(false);
    }
  });
});