// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.3;

// import "hardhat/console.sol";
import "contracts/Payment.sol";

contract ItemManager {

    enum Step{CREATED, PAID, DELIVERED}

    struct S_Item {
        Step _step;
        string _id;
        uint _priceInWei;
        // Payment _payment; // TODO include payment
    }

    // state
    mapping(uint => S_Item) public items;
    uint index;

    // events
    event SupplyChainStep(uint _itemIndex, uint _step);

    constructor() {
        index = 1;
    }

    function createItem(string memory _id, uint _priceInWei) public {
        items[index]._id = _id;
        items[index]._priceInWei = _priceInWei;
        items[index]._step = Step.CREATED;
        emit SupplyChainStep(index, uint(items[index]._step));
        index++;
    }

    function triggerPayment(uint _index) public payable {
        require(keccak256(abi.encodePacked(items[_index]._id)) != keccak256(abi.encodePacked("")), "Item does not exist");
        require(items[_index]._priceInWei == msg.value, "Exact money is needed");
        require (items[_index]._step == Step.CREATED, "Item is not ready for paymment");
        items[_index]._step = Step.PAID;
        emit SupplyChainStep(_index, uint(Step.PAID));
    }

    function triggerDelivery(uint _index) public {
        require(items[_index]._step == Step.PAID, "Item is not paid");
        items[_index]._step == Step.DELIVERED;
        emit SupplyChainStep(_index, uint(Step.DELIVERED));
    }
}