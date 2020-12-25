const SendMoneyExample = artifacts.require('SendMoneyExample');

module.exports = function(deployer) {
    deployer.deploy(SendMoneyExample);
}