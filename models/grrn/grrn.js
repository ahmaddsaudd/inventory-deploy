const mongoose = require("mongoose");

const GRRNSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const GRRN = mongoose.model("grrn", GRRNSchema);
module.exports = GRRN;
