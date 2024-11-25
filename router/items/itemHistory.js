const express = require("express");
const app = express();
const itemHistory = require("../../controller/items/itemHistory");

app.get("/get/:userID", itemHistory.getItemHistoryData);

module.exports = app;
