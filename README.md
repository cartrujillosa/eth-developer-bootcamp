# Supply chain

We have some sort of a manager which can hold some sort of items and we can do basically free things:
- create new item then this item needs to be paid
- then somebody pays this item and it need to be delivered
- once it's delivered the customer is informed that it's on the way

# Tech
- Hardhat, ethersjs and typescript
- Testing with mocha+chai and waffle, also ganache for local development
- React+nextjs, chakra and typescript

Testing locally:
```sh
npx hardhat compile
npx hardhat react
npx hardhat --network localhost deploy
```