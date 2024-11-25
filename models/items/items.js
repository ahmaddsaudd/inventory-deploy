const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const Item = mongoose.model("item", ItemSchema);
module.exports = Item;
