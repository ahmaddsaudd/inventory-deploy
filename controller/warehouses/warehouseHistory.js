const WarehouseHistory = require("../../models/warehouses/warehouseHistory");

const getWarehouseHistoryData = async (req, res) => {
  const findAllWarehouseHistoryData = await WarehouseHistory.find()
    .sort({ _id: -1 }) // -1 for descending order
    .populate("userID");
  res.json(findAllWarehouseHistoryData);
};

module.exports = { getWarehouseHistoryData };
