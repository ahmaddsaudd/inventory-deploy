const StockHistory = require("../../models/orders/stockHistory");

const getStockHistoryData = async (req, res) => {
  const findAllStockHistoryData = await StockHistory.find()
    .sort({ _id: -1 }) // -1 for descending order
    .populate("userID");
  res.json(findAllStockHistoryData);
};

module.exports = { getStockHistoryData };
