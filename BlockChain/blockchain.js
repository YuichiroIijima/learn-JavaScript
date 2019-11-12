const sha256 = require("sha256");

function BlockChain() {
  this.chain = [];
  this.pendingTransaction = [];
}

BlockChain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transaction: this.pendingTransaction,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash
  };

  this.pendingTransaction = [];
  this.chain.push(newBlock);

  return newBlock;
};

BlockChain.prototype.getLastBlock = function() {
  return this.chain[this.chain.length - 1];
};

BlockChain.prototype.createNewTransaction = function(
  amount,
  sender,
  recipient
) {
  const newTransaction = {
    amount: amount,
    sender: sender,
    recipient: recipient
  };
  this.pendingTransaction.push(newTransaction);
  return this.getLastBlock()["index"] + 1;
};

BlockChain.prototype.hashBlock = function(
  previousBlockHash,
  currentBlockData,
  nonce
) {
  const dataAsString =
    previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);
  return hash;
};

module.exports = BlockChain;
