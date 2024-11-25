const express = require("express");
const app = express();
const grnHistory = require("../../controller/grn/grnHistory");

app.get("/get/:userID", grnHistory.getGRNHistoryData);

module.exports = app;
