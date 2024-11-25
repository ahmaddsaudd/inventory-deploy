const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
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
    products: {
      type: Array,
      ref: "product",
      required: true,
    },
    StoreID: {
      type: Object,
      ref: "store",
      required: true,
    },
    orderDate: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    riderName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("order", OrderSchema);
module.exports = Order;
