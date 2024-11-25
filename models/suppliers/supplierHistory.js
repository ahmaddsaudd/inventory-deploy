const mongoose = require("mongoose");

const SupplierHistorySchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    requestType: {
      type: String,
      requried: true,
    },
  },
  { timestamps: true }
);

const SupplierHistory = mongoose.model(
  "supplierHistory",
  SupplierHistorySchema
);
module.exports = SupplierHistory;
