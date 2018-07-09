// This is to specify the version of solidity that we are writing
// This is to ensure that all the previous contracts are going to be supported
pragma solidity ^0.4.17;

// Defines a new contract
// Almost indentical when we define a class
contract Inbox {
    // Class/Contract variables
    string public message;

    // We define the constructor of that smart contract
    constructor(string initialMessage) public {
        message = initialMessage;
    }a

    // Member functions
    function setMessage(string newMessage) public{
        message = newMessage;
    }
    function getMessage() public view returns (string){
        return message;
    }
}
