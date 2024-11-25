const mongoose = require("mongoose");

const GRNHistorySchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    supplier: {
      type: String,
      required: true,
    },
    transportCost: {
      type: Number,
      required: true,
    },
    laborCost: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    purchaseDate: {
      type: String,
      required: true,
    },
    requestType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const GRNHistory = mongoose.model("grnHistory", GRNHistorySchema);
module.exports = GRNHistory;
