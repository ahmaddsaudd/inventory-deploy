const express = require("express");
const app = express();
const suppliers = require("../../controller/suppliers/supplier");

// Add Supplier
app.post("/add", suppliers.addSupplier);

// Get All Suppliers
app.get("/get/:userId", suppliers.getAllSuppliers);

// Delete Selected Supplier
app.get("/delete/:id", suppliers.deleteSelectedSupplier);

// Update Selected Supplier
app.post("/update", suppliers.updateSelectedSupplier);

// Search Supplier
app.get("/search", suppliers.searchSupplier);

module.exports = app;
