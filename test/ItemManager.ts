import { ethers } from "hardhat";
import { Signer } from "ethers";

import chai from "chai";
import { solidity } from "ethereum-waffle";
import { ItemManager } from "../typechain/ItemManager";
chai.use(solidity);
const { expect } = chai;

describe("ItemManager", () => {
  let contract: ItemManager;
  let accounts: Signer[];

  beforeEach(async () => {
    
    accounts = await ethers.getSigners();
    
    const contractFactory = await ethers.getContractFactory(
      "ItemManager",
      accounts[0]
    );
    contract = (await contractFactory.deploy()) as ItemManager;
    await contract.deployed();

    expect(contract.address).to.properAddress;

    // TODO smt with owner
    // TODO upgradeable
  });
  
  describe("at creation", async () => {
    it("smt", async () => {
      // TODO
    });
  });

  describe("adding an item", async () => {
    it("items state +1", async () => {
      // TODO
    });
    it("event emitted", async () => {
      // TODO
    });
  });
});

// describe("Token contract", function() {
//   it("Deployment should assign the total supply of tokens to the owner", async function() {
//     const [owner] = await ethers.getSigners();

//     const Token = await ethers.getContractFactory("Token");

//     const hardhatToken = await Token.deploy();

//     const ownerBalance = await hardhatToken.balanceOf(owner.address);
//     expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
//   });
// });