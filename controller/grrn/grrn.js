const GRRN = require("../../models/grrn/grrn");
const Product = require("../../models/product/product");
const GRRNHistory = require("../../models/grrn/grrnHistory");

// Create GRRN
const createGRRN = async (req, res) => {
  try {
    console.log(req.body);
    const products = req.body.products;

    for (i = 0; i < products.length; i++) {
      const product = products[i].product;
      const quantityToAdd = products[i].stockOrdered;
      const newQuantity = Number(product.stock) + Number(quantityToAdd);

      await Product.findByIdAndUpdate(product._id, { stock: newQuantity });
    }

    await GRRN.create({
      userID: req.body.userID,
      products: req.body.products,
      vendor: req.body.vendor,
      date: req.body.date,
    });

    await GRRNHistory.create({
      userID: req.body.userID,
      products: req.body.products,
      vendor: req.body.vendor,
      date: req.body.date,
      requestType: "GRRN Created",
    });
    return res.json({ message: "GRRN created and Stock Updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get All GRRN Data
const getGRRNData = async (req, res) => {
  const findAllGRRNData = await GRRN.find()
    .sort({ _id: -1 }) // -1 for descending order
    .populate("userID");
  res.json(findAllGRRNData);
};

module.exports = {
  createGRRN,
  getGRRNData,
};
