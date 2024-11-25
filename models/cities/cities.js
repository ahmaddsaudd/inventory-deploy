const mongoose = require("mongoose");

const CitiesSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    areas: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const City = mongoose.model("city", CitiesSchema);
module.exports = City;
