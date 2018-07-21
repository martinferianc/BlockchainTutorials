// Make use of the default path module
const path = require('path');
// Make use of the default file system module
const fs = require('fs');
// Make use of the solc (solidity compiler)
// Install it with npm install solc
const solc = require('solc');

//Resolve the path to our Inbox.sol
const inboxPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');

//Read it
const source = fs.readFileSync(inboxPath, 'utf8');

//Compile it!
module.exports = solc.compile(source, 1).contracts[':Lottery'];
