pragma solidity ^0.4.17;



contract Campaign{
    struct Request{
      string description;
      uint value;
      address recipient;
      bool complete;
    }
    address public manager;
    uint public minimumContribution;
    address[] public approvers;

    constructor(uint minimum) public{
      manager = msg.sender;
      minimumContribution = minimum;
    }
    modifier requiredMinimum(){
        // Require that the winner is always picked by manager
        require(msg.value > minimumContribution);
        _;
    }
    function contribute() public payable requiredMinimum{
      approvers.push(msg.sender);

    }

}
