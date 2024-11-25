const Product = require("../../models/product/product");
const ProductHistory = require("../../models/product/productHistory");

// Get All Products
const getAllProducts = async (req, res) => {
  const findAllProducts = await Product.find().sort({ expirationDate: 1 }); // -1 for descending;
  res.json(findAllProducts);
};

// Delete Selected Product
const deleteSelectedProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const result = await Product.findByIdAndDelete(productId);
    res.send(result);
    await ProductHistory.create({
      userID: result.userID,
      items: result.items,
      packSize: result.packSize,
      stock: result.stock,
      supplier: result.supplier,
      production: result.production,
      expirationDate: result.expirationDate,
      city: result.city,
      area: result.area,
      warehouseNumber: result.warehouseNumber,
      requestType: "Inventory Deleted",
    });
  } catch (e) {
    res.status(402).send(e);
  }
};

// Update Selected Product
const updateSelectedProduct = async (req, res) => {
  try {
    const userId = req.body.userId;
    const updatedResult = await Product.findByIdAndUpdate(
      { _id: req.body.productID },
      {
        userID: req.body.userId,
        items: req.body.items,
        packSize: req.body.packSize,
        stock: req.body.stock,
        supplier: req.body.supplier,
        production: req.body.production,
        expirationDate: req.body.expirationDate,
        city: req.body.city,
        area: req.body.area,
        warehouseNumber: req.body.warehouseNumber,
      },
      { new: true }
    );
    await ProductHistory.create({
      userID: userId,
      items: updatedResult.items,
      packSize: updatedResult.packSize,
      stock: updatedResult.stock,
      supplier: updatedResult.supplier,
      unitPrice: updatedResult.unitPrice,
      production: updatedResult.production,
      expirationDate: updatedResult.expirationDate,
      city: updatedResult.city,
      area: updatedResult.area,
      warehouseNumber: updatedResult.warehouseNumber,
      requestType: "Inventory Updated",
    });

    console.log(updatedResult);
    res.json(updatedResult);
  } catch (error) {
    console.log(error);
    res.status(402).send("Error");
  }
};

// Search Products
const searchProduct = async (req, res) => {
  const searchTerm = req.query.searchTerm;
  const products = await Product.find({
    name: { $regex: searchTerm, $options: "i" },
  });
  res.json(products);
};

module.exports = {
  getAllProducts,
  deleteSelectedProduct,
  updateSelectedProduct,
  searchProduct,
};
