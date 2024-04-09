const Medical = artifacts.require("VaidyaTech");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Medical);
};
