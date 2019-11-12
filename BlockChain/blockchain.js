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

module.exports = BlockChain;
