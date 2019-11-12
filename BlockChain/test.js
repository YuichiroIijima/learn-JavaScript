const BlockChain = require("./blockchain");
const bitcoin = new BlockChain();

bitcoin.createNewBlock(2389, "00IAIJIJUIGGUGUYG", "09IAIJHIFYFTUFIFDIJU");

console.log(bitcoin);
