const GRNHistory = require("../../models/grn/grnHistory");

const getGRNHistoryData = async (req, res) => {
  const findAllGRNHistoryData = await GRNHistory.find()
    .sort({ _id: -1 }) // -1 for descending order
    .populate("userID");
  res.json(findAllGRNHistoryData);
};

module.exports = { getGRNHistoryData };
