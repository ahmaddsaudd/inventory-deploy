const express = require("express");
const router = express();
const accountPayable = require("../../controller/ledger/accountPayable");

router.get("/", accountPayable.getAccountPayable);

router.post("/add", accountPayable.addTransaction);

module.exports = router;
