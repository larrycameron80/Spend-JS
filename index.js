let spendCrypto = require("./crypto");
let utils = require("./tools");

// let mnemonic = spendCrypto.generateMnemonic()
// console.log("mnemonic: ", mnemonic)
// let wallet = spendCrypto.getWalletFromSeed(mnemonic)
// console.log(JSON.stringify(wallet, null, "\t"))

module.exports = {
  spendCrypto,
  utils
}