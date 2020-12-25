pragma solidity >=0.4.22 <0.8.0;

contract Variables {
    uint256 public myUint; // equal to uint

    function setMyUint(uint _myUint) public {
        myUint = _myUint;
    }
}