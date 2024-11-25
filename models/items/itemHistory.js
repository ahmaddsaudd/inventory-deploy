const mongoose = require("mongoose");

const ItemHistorySchema = new mongoose.Schema(
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
    packSize: {
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

const ItemHistory = mongoose.model("itemHistory", ItemHistorySchema);
module.exports = ItemHistory;
