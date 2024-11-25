const express = require("express");
const app = express();
const grrn = require("../../controller/grrn/grrn");

// Add GRRN
app.post("/add", grrn.createGRRN);

// Get All GRRN Data
app.get("/get/:userID", grrn.getGRRNData);

module.exports = app;
