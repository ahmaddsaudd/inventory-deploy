const express = require("express");
const app = express();
const storeHistory = require("../../controller/vendors/storeHistory");

app.get("/get/:userID", storeHistory.getStoreHistoryData);

module.exports = app;
