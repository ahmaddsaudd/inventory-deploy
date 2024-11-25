const express = require("express");
const app = express();
const items = require("../../controller/items/items");

// Add Item
app.post("/add", items.addItem);

// Get All Items
app.get("/get/:userId", items.getAllItems);

// Delete Selected Item
app.get("/delete/:id", items.deleteSelectedItem);

// Update Selected Item
app.post("/update", items.updateSelectedItem);

// Search Item
app.get("/search", items.searchItem);

module.exports = app;
