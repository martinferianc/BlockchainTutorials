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
    }

    // Member functions
    function setMessage(string newMessage) public{
        message = newMessage;
    }
    // Function Name       Type        Return type
    // Actually a little bit redundant, since Solidity
    // Automatically creates its own function
    function getMessage() public constant returns (string){
        return message;
    }
}
