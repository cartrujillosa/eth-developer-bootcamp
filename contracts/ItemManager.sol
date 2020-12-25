pragma solidity ^0.7.3;

import "hardhat/console.sol";


contract ItemManager {

    enum Step{CREATED, PAID, DELIVERED}

    struct S_Item {
        Step _step;
        string _id;
        uint _priceInWei;
    }

    // state
    mapping(uint => S_Item) public items;
    uint index;

    // events
    event SupplyChainStep(uint _itemIndex, uint _step);

    function createItem(string memory _id, uint _priceInWei) public {
        items[index]._id = _id;
        items[index]._priceInWei = _priceInWei;
        items[index]._step = Step.CREATED;
        emit SupplyChainStep(index, uint(items[index]._step));
        index++;
    }
}