const mongoose = require("mongoose");

const GRNSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const GRN = mongoose.model("grn", GRNSchema);
module.exports = GRN;
