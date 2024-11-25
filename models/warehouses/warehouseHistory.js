const mongoose = require("mongoose");

const WarehouseHistorySchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
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
      type: Array,
      required: true,
    },
    requestType: {
      type: String,
      requried: true,
    },
  },
  { timestamps: true }
);

const WarehouseHistory = mongoose.model(
  "warehouseHistory",
  WarehouseHistorySchema
);
module.exports = WarehouseHistory;
