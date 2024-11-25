const ItemHistory = require("../../models/items/itemHistory");

const getItemHistoryData = async (req, res) => {
  const findAllItemHistoryData = await ItemHistory.find()
    .sort({ _id: -1 }) // -1 for descending order
    .populate("userID");
  res.json(findAllItemHistoryData);
};

module.exports = { getItemHistoryData };
