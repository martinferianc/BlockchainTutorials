const assert = require('assert');

//Ganache is only for a local test network
const ganache = require('ganache-cli');

// Constructor for web3
const Web3 = require('web3');

//Creates an instance and connect it to the local test network
const web3 = new Web3(ganache.provider());
