const mongoose = require("mongoose");

const WarehouseSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const Warehouse = mongoose.model("warehouse", WarehouseSchema);
module.exports = Warehouse;
