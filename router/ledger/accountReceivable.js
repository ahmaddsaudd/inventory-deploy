const express = require("express");
const router = express();
const accountReceivable = require("../../controller/ledger/accountReceivable");

router.get("/", accountReceivable.getAccountReceivable);

router.post("/add", accountReceivable.addTransaction);

module.exports = router;
