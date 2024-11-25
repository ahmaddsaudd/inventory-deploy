const mongoose = require("mongoose");

const StoreHistorySchema = new mongoose.Schema(
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
    category: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      ref: "item",
      required: true,
    },
    requestType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const StoreHistory = mongoose.model("storeHistory", StoreHistorySchema);
module.exports = StoreHistory;
