const ProductHistory = require("../../models/product/productHistory");

const getProductHistoryData = async (req, res) => {
  const findAllStockHistoryData = await ProductHistory.find()
    .sort({ _id: -1 }) // -1 for descending order
    .populate("userID");
  res.json(findAllStockHistoryData);
};

module.exports = { getProductHistoryData };
