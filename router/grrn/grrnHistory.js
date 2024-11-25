const express = require("express");
const app = express();
const grrnHistory = require("../../controller/grrn/grrnHistory");

app.get("/get/:userID", grrnHistory.getGRRNHistoryData);

module.exports = app;
