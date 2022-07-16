const Vendor = artifacts.require("TokenVendor");
const Token = artifacts.require("OGG");

module.exports = async function (deployer) {
 await deployer.deploy(Token,100);
  const instance1 = await Token.deployed();
  await deployer.deploy(Vendor,instance1.address)
  const instance2 = await Vendor.deployed();
  await instance1.Transfer(instance2.address,10);
  await instance1.Renounce(instance2.address);
  
};
