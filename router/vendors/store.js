const express = require("express");
const app = express();
const store = require("../../controller/vendors/store");

// Add Store
app.post("/add", store.addStore);

//Delete Store
app.get("/delete/:id", store.deleteStore);

// Get All Store
app.get("/get/:userID", store.getAllStores);

// Update Selected Store
app.post("/update", store.addItemInfo);

module.exports = app;
