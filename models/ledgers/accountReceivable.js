const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["debit", "credit"],
    },
    debit: {
      type: Number,
      required: true,
    },
    credit: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const accountReceivableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  transactions: [transactionSchema],
  total: {
    type: Number,
    required: true,
  },
});

const accountReceivable = mongoose.model(
  "accountReceivable",
  accountReceivableSchema
);
module.exports = accountReceivable;
