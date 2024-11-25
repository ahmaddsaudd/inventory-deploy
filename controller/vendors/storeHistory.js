const StoreHistory = require("../../models/vendors/storeHistory");

const getStoreHistoryData = async (req, res) => {
  const findAllStoreHistoryData = await StoreHistory.find()
    .sort({ _id: -1 }) // -1 for descending order
    .populate("userID");
  res.json(findAllStoreHistoryData);
};

module.exports = { getStoreHistoryData };
