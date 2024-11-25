const express = require("express");
const app = express();
const productHistory = require("../../controller/product/productHistory");

app.get("/get/:userID", productHistory.getProductHistoryData);

module.exports = app;
