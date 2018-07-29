pragma solidity ^0.4.17;

contract Lottery{
    address public manager;
    address [] private players;

    constructor() public {
     manager = msg.sender;
    }
    // Function can accept ether
    function enter() public payable{
        assert(msg.value > .01 ether);
        players.push(msg.sender);
    }

    function random() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }

    //New function modifier, rducing the amount of code
    //That one has to write
    modifier restricted(){
        // Require that the winner is always picked by manager
        require(msg.sender == manager);
        _;
    }

    function pickWinner() public restricted {
        uint index = random() % players.length;

        // Holds how much money the contract has : this.balance
        players[index].transfer(this.balance);

        // We want to have an initial size of zero,
        // otherwise it would be automatically size of 5
        players = new address[](0);
    }

    function getPlayers() public view returns(address[]){
        return players;
    }
}
