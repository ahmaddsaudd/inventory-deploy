const GRRNHistory = require("../../models/grrn/grrnHistory");

const getGRRNHistoryData = async (req, res) => {
  const findAllGRRNHistoryData = await GRRNHistory.find()
    .sort({ _id: -1 }) // -1 for descending order
    .populate("userID");
  res.json(findAllGRRNHistoryData);
};

module.exports = { getGRRNHistoryData };
