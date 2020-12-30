import { ethers } from "hardhat";
import { Signer } from "ethers";
import 'module-alias/register';

import chai from "chai";
import { solidity } from "ethereum-waffle";
import { ItemManager } from "@generated-types";
chai.use(solidity);
const { expect } = chai;

describe("ItemManager", () => {
  let contract: ItemManager;
  let accounts: Signer[];
  let owner: Signer;
  const first = 1;
  const CREATED = 0;
  const PAID = 1;
  const DELIVERED = 2;

  const itemId = "001"
  const itemPrice = ethers.utils.parseEther("1")
  const otherPrice = ethers.utils.parseEther("2")

  beforeEach(async () => {

    accounts = await ethers.getSigners();
    owner = accounts[0]

    const contractFactory = await ethers.getContractFactory(
      "ItemManager",
      owner
    );
    contract = (await contractFactory.deploy()) as ItemManager;
    await contract.deployed();

    expect(contract.address).to.properAddress;

    // TODO smt with owner
    // TODO upgradeable
  });

  describe("adding first item", async () => {
    it("event emitted", async () => {
      await expect(contract.createItem(itemId, itemPrice))
        .to.emit(contract, "SupplyChainStep")
        .withArgs(first, CREATED)
    });

    it("items +1", async () => {
      await contract.createItem(itemId, itemPrice)
      const itemCreated = await contract.items(first)

      expect(itemCreated._step).to.eq(CREATED)
      expect(itemCreated._id).to.eq(itemId)
      expect(itemCreated._priceInWei).to.eq(itemPrice)
    });
  });

  describe("payment", async () => {
    beforeEach(async () => {

      await contract.createItem(itemId, itemPrice)
    })

    it("invalid index", async () => {
      await expect(contract.triggerPayment(0, { value: itemPrice }))
        .to.be.revertedWith('Item does not exist');
    });

    it("event emitted", async () => {
      await expect(contract.triggerPayment(first, { value: itemPrice }))
        .to.emit(contract, "SupplyChainStep")
        .withArgs(first, PAID)
    });

    it("invalid value", async () => {
      await expect(contract.triggerPayment(first, { value: otherPrice }))
        .to.be.revertedWith('Exact money is needed');
    });

    it("item step change", async () => {
      await contract.triggerPayment(first, { value: itemPrice })
      const itemCreated = await contract.items(first)
      expect(itemCreated._step).to.eq(PAID)
    });

    it("invalid item step", async () => {
      await contract.triggerPayment(first, { value: itemPrice })
      await expect(contract.triggerPayment(first, { value: itemPrice }))
        .to.be.revertedWith('Item is not ready for paymment');
    });
  });
});