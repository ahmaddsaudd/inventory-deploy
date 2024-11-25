const express = require("express");
const app = express();
const grn = require("../../controller/grn/grn");

// Add GRN
app.post("/add", grn.addGRN);

// Get All GRN
app.get("/get/:userId", grn.getAllGRNs);

// Search GRN
app.get("/search", grn.searchGRN);

// Delete Selected GRN
app.get("/delete/:id", grn.deleteSelectedGRN);

module.exports = app;
