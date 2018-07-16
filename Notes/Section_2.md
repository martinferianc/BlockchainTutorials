# Section 2

## Compilation

It is necessary to create a `compile.js` file with basic contents of:

```js
// Make use of the default path module
const path = require('path');
// Make use of the default file system module
const fs = require('fs');
// Make use of the solc (solidity compiler)
// Install it with npm install solc
const solc = require('solc');

//Resolve the path to our Inbox.sol
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

//Read it
const source = fs.readFileSync(inboxPath, 'utf8');

//Compile it!
module.exports = solc.compile(source, 1).contracts[':Inbox'];
```

## Testing through Mocha platform

Couple of functions to keep in mind:

_it_: Run a test and make an assertion

_describe_: Group together _it_ functions

_beforeEach_ Execute some general setup code

## web3 with Contracts

We can use web3 to create a deploy a contract or use it as an interface to interact with contracts that have already been deployed and created. For intraction we do not need the bytecode, but we need the address of a deployed contract. 
