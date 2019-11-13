const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

// トランザクションの作成
bitcoin.createNewTransaction(
  100,
  "ALICE090970FYFFYFYFIF",
  "BOB797789790JFJFFGFJF"
);

function mining(bitcoin) {
  // 前のブロックを取得
  const lastBlock = bitcoin.getLastBlock();

  // 前のブロックのハッシュを取得
  const previousBlockHash = lastBlock["hash"];

  // 現在のブロックのデータ
  const currentBlockData = {
    transaction: bitcoin.previousBlockHash,
    index: lastBlock["index"] + 1
  };

  // Powでnonceを求める
  const nonce = bitcoin.proofOfwork(previousBlockHash, currentBlockData);

  // 前回のブロックのハッシュ、今回のブロックのデータ、nonceをもとにハッシュを求める
  const blockHash = bitcoin.hashBlock(
    previousBlockHash,
    currentBlockData,
    nonce
  );

  // ブロック生成
  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
}

mining(bitcoin);

bitcoin.createNewTransaction(
  200,
  "ALICE090970FYFFYFYFIF",
  "BOB797789790JFJFFGFJF"
);

mining(bitcoin);

bitcoin.createNewTransaction(
  300,
  "ALICE090970FYFFYFYFIF",
  "BOB797789790JFJFFGFJF"
);

mining(bitcoin);

console.log(bitcoin);
