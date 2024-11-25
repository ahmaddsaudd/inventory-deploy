const express = require("express");
const app = express();
const warehouseHistory = require("../../controller/warehouses/warehouseHistory");

app.get("/get/:userID", warehouseHistory.getWarehouseHistoryData);

module.exports = app;
