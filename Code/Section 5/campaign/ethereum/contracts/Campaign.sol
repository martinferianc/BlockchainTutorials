pragma solidity ^0.4.17;

contract CampaignFactory{
  address[] public deployedCampaigns;

  function createCampaign(uint minimum) public{
    address newCampaign = new Campaign(minimum, msg.sender);
    deployedCampaigns.push(newCampaign);
  }
  function getDeployedCampaigns() public view returns (address[]){
    return deployedCampaigns;
  }
}

contract Campaign{
  // Creates a type of request
    struct Request{
      string description;
      uint value;
      address recipient;
      bool complete;
      uint approvalCount;
      mapping (address => bool) approvals;
    }
    Request [] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    constructor(uint minimum, address creator) public{
      manager = creator;
      minimumContribution = minimum;
    }
    modifier restricted(){
      require(msg.sender == manager);
      _;
    }
    modifier requiredMinimum(){
        // Require that the winner is always picked by manager
        require(msg.value > minimumContribution);
        _;
    }
    function contribute() public payable requiredMinimum{
      approvers[msg.sender] = true;
      approversCount++;

    }
    function createRequest(string description, uint value, address recipient)
     public restricted{
       require(approvers[msg.sender]);
      Request memory newRequest = Request({
        description: description,
        value: value,
        recipient: recipient,
        complete: false,
        approvalCount: 0
      });
      requests.push(newRequest);
    }
    function approveRequest(uint index) public{
      Request storage request = requests[index];

      require(approvers[msg.sender]);
      require(!requests[index].approvals[msg.sender]);
      request.approvals[msg.sender] = true;
      request.approvalCount++;

    }

    function finalizeRequest(uint index) restricted public restricted {
      Request storage request = requests[index];
      require(request.approvalCount > (approversCount / 2));
      require(!request.complete);

      request.recipient.transfer(request.value);
      request.complete = true;
    }

    function getSummary() public view returns (
      uint, uint, uint, uint, address
    ){
      return (
        minimumContribution,
        this.balance,
        requests.length,
        approversCount,
        manager
      );
    }
    function getRequestCount() public view returns (uint){
      return requests.length;
    }
  /*
  int [] !storage! myArray = numbers <- points to the same container
          memory <- Deep copy only for a particular function

  When we put storage as a parameter the we are passing information by reference
  */

}
