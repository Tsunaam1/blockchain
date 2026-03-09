var fs = require("fs");
var sha256 = require("js-sha256");
var block = require("./block.js");

try {
  blockc_file = fs.readFileSync("./data/blockchain.json", "utf-8");
} catch (error) {
  fs.writeFileSync("./data/blockchain.json", "", "utf-8");
}

sh = JSON.parse(blockc_file);

chain_len = sh.chain.length;
prev_hash = sh.chain[chain_len - 1].hash;
nonce = 0;

blockchain_line = {
  index: chain_len,
  nonce: nonce,
  data: JSON.stringify(parsed_data),
  hash: sha256(JSON.stringify(parsed_data) + nonce + prev_hash),
  prev_hash: prev_hash,
};

function addToBlockChain() {
  sh.chain[chain_len] = blockchain_line;
  fs.writeFileSync(
    "./data/blockchain.json",
    JSON.stringify({ chain: sh.chain }),
    "utf-8",
  );
  console.log("Successfully added a new Block to the Blockchain!");
}

function loadBlockChain() {
  return sh;
}

module.exports = { addToBlockChain, loadBlockChain };
