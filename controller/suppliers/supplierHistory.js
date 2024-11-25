const SupplierHistory = require("../../models/suppliers/supplierHistory");

const getSupplierHistoryData = async (req, res) => {
  const findAllSupplierHistoryData = await SupplierHistory.find()
    .sort({ _id: -1 }) // -1 for descending order
    .populate("userID");
  res.json(findAllSupplierHistoryData);
};

module.exports = { getSupplierHistoryData };
