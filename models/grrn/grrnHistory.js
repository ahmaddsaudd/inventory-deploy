const mongoose = require("mongoose");

const GRRNHistorySchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    products: {
      type: Object,
      ref: "product",
      required: true,
    },
    vendor: {
      type: Object,
      ref: "store",
      required: true,
    },
    date: {
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

const GRRNHistory = mongoose.model("grrnHistory", GRRNHistorySchema);
module.exports = GRRNHistory;
