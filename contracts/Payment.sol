// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.3;

// import "hardhat/console.sol";
import "contracts/ItemManager.sol";

contract Payment {
    uint public priceInWei;
    uint public index;

    ItemManager itemManager;

    constructor(ItemManager _itemManager, uint _priceInWei, uint _index) {
        priceInWei = _priceInWei;
        index = _index;
        itemManager = _itemManager;
    }

    receive() external payable {
        payable(address(itemManager)).transfer(msg.value); // we need low leve func (less gas but more dangerous) and we create signature by hand
    }
}