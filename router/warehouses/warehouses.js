const express = require("express");
const app = express();
const warehouses = require("../../controller/warehouses/warehouses");

// Add Warehouse
app.post("/add", warehouses.addWarehouse);

// Get All Warehouses
app.get("/get/:userId", warehouses.getAllWarehouses);

// Get All Cities
app.get("/get/city/:userId", warehouses.getAllCities);

// Delete Selected Warehouse
app.get("/delete/:id", warehouses.deleteSelectedWarehouse);

// Update Selected Warehouse
app.post("/update", warehouses.updateSelectedWarehouse);

// Search Warehouse
app.get("/search", warehouses.searchWarehouse);

module.exports = app;
