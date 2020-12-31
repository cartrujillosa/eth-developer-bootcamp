/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ItemManager } from "../ItemManager";

export class ItemManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ItemManager> {
    return super.deploy(overrides || {}) as Promise<ItemManager>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ItemManager {
    return super.attach(address) as ItemManager;
  }
  connect(signer: Signer): ItemManager__factory {
    return super.connect(signer) as ItemManager__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ItemManager {
    return new Contract(address, _abi, signerOrProvider) as ItemManager;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_itemIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_step",
        type: "uint256",
      },
    ],
    name: "SupplyChainStep",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_priceInWei",
        type: "uint256",
      },
    ],
    name: "createItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "index",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "items",
    outputs: [
      {
        internalType: "enum ItemManager.Step",
        name: "_step",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_priceInWei",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "triggerDelivery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "triggerPayment",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060018081905550610949806100276000396000f3fe60806040526004361061004a5760003560e01c80632986c0e51461004f578063800fb83f1461007a5780638c551742146100a8578063bfb231d21461017a578063cd31831e14610247575b600080fd5b34801561005b57600080fd5b50610064610282565b6040518082815260200191505060405180910390f35b6100a66004803603602081101561009057600080fd5b8101908080359060200190929190505050610288565b005b3480156100b457600080fd5b50610178600480360360408110156100cb57600080fd5b81019080803590602001906401000000008111156100e857600080fd5b8201836020820111156100fa57600080fd5b8035906020019184600183028401116401000000008311171561011c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050610569565b005b34801561018657600080fd5b506101b36004803603602081101561019d57600080fd5b8101908080359060200190929190505050610670565b604051808460028111156101c357fe5b815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561020a5780820151818401526020810190506101ef565b50505050905090810190601f1680156102375780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34801561025357600080fd5b506102806004803603602081101561026a57600080fd5b810190808035906020019092919050505061073f565b005b60015481565b60405160200180600001905060405160208183030381529060405280519060200120600080838152602001908152602001600020600101604051602001808280546001816001161561010002031660029004801561031d5780601f106102fb57610100808354040283529182019161031d565b820191906000526020600020905b815481529060010190602001808311610309575b50509150506040516020818303038152906040528051906020012014156103ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f4974656d20646f6573206e6f742065786973740000000000000000000000000081525060200191505060405180910390fd5b346000808381526020019081526020016000206002015414610436576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4578616374206d6f6e6579206973206e6565646564000000000000000000000081525060200191505060405180910390fd5b6000600281111561044357fe5b60008083815260200190815260200160002060000160009054906101000a900460ff16600281111561047157fe5b146104e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4974656d206973206e6f7420726561647920666f72207061796d6d656e74000081525060200191505060405180910390fd5b600160008083815260200190815260200160002060000160006101000a81548160ff0219169083600281111561051657fe5b02179055507f8c198761ba3d324d155cbaf96f0ac38a531c085089e49106d95352535a1110c2816001600281111561054a57fe5b604051808381526020018281526020019250505060405180910390a150565b8160008060015481526020019081526020016000206001019080519060200190610594929190610876565b50806000806001548152602001908152602001600020600201819055506000806000600154815260200190815260200160002060000160006101000a81548160ff021916908360028111156105e557fe5b02179055507f8c198761ba3d324d155cbaf96f0ac38a531c085089e49106d95352535a1110c2600154600080600154815260200190815260200160002060000160009054906101000a900460ff16600281111561063e57fe5b604051808381526020018281526020019250505060405180910390a16001600081548092919060010191905055505050565b60006020528060005260406000206000915090508060000160009054906101000a900460ff1690806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561072f5780601f106107045761010080835404028352916020019161072f565b820191906000526020600020905b81548152906001019060200180831161071257829003601f168201915b5050505050908060020154905083565b6001600281111561074c57fe5b60008083815260200190815260200160002060000160009054906101000a900460ff16600281111561077a57fe5b146107ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f4974656d206973206e6f7420706169640000000000000000000000000000000081525060200191505060405180910390fd5b6002808111156107f957fe5b60008083815260200190815260200160002060000160009054906101000a900460ff16600281111561082757fe5b50507f8c198761ba3d324d155cbaf96f0ac38a531c085089e49106d95352535a1110c28160028081111561085757fe5b604051808381526020018281526020019250505060405180910390a150565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108b757805160ff19168380011785556108e5565b828001600101855582156108e5579182015b828111156108e45782518255916020019190600101906108c9565b5b5090506108f291906108f6565b5090565b5b8082111561090f5760008160009055506001016108f7565b509056fea264697066735822122003d045dc5696d91eaffd7c77e523fdc05276ed9416b4c3e6a49fe2fb4c2868d464736f6c63430007030033";
