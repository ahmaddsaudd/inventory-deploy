const mongoose = require("mongoose");

const ProductHistorySchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    items: {
      type: Object,
      ref: "item",
      required: true,
    },
    packSize: {
      type: Object,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    supplier: {
      type: String,
      required: true,
    },
    production: {
      type: String,
      required: true,
    },
    expirationDate: {
      type: String,
      required: true,
    },
    requestType: {
      type: String,
      requried: true,
    },
    city: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    warehouseNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const ProductHistory = mongoose.model("productHistory", ProductHistorySchema);
module.exports = ProductHistory;
