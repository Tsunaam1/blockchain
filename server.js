const express = require("express");
const app = express();
const port = 3000;
var blockchain = require("./blockchain.js");

let appServer = app.listen(port, () =>
  console.log("Listening on port " + port + "..."),
);

sh = blockchain.loadBlockChain();

app.get("/api/blockchain", (req, res) => {
  res.send(sh);
});

app.get("/api/blockchain/:id", (req, res) => {
  const index = Number(req.params.id);
  const block = sh.chain[index];
  if (block) {
    res.send(block);
  } else {
    res.status(404).send("Block s indexem " + index + " nebyl nalezen.");
  }
});

app.get("/quit", function (req, res) {
  res.send("Vypínám server..");
  appServer.close();
});

blockchain.addToBlockChain();
