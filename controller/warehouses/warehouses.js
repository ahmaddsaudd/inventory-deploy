const Warehouse = require("../../models/warehouses/warehouses");
const WarehouseHistory = require("../../models/warehouses/warehouseHistory");
const City = require("../../models/cities/cities");

// Add Warehouse
const addWarehouse = async (req, res) => {
  try {
    await Warehouse.create({
      userID: req.body.userId,
      city: req.body.city,
      area: req.body.area,
      warehouseNumber: req.body.warehouseNumber,
    });

    await WarehouseHistory.create({
      userID: req.body.userId,
      city: req.body.city,
      area: req.body.area,
      warehouseNumber: req.body.warehouseNumber,
      requestType: "Warehouse Created",
    });

    res.status(200).send({ message: "Warehouse and History it's Created" });
  } catch (e) {
    res.status(402).send({ message: e.message });
  }
};

// Get All Warehouses
const getAllWarehouses = async (req, res) => {
  const findAllWarehouses = await Warehouse.find().sort({
    _id: -1,
  });
  res.json(findAllWarehouses);
};

// Get All Cities
const getAllCities = async (req, res) => {
  const findAllCities = await City.find().sort({
    _id: -1,
  });
  res.json(findAllCities);
};

// Delete Selected Warehouse
const deleteSelectedWarehouse = async (req, res) => {
  try {
    const warehouseId = req.params.id;
    const result = await Warehouse.findByIdAndDelete(warehouseId);
    res.send(result);
    await WarehouseHistory.create({
      userID: result.userID,
      city: result.city,
      area: result.area,
      warehouseNumber: result.warehouseNumber,
      requestType: "Warehouse Deleted",
    });
  } catch (e) {
    res.status(402).send(e);
  }
};

// Update Selected Warehouse
const updateSelectedWarehouse = async (req, res) => {
  try {
    const userId = req.body.userId;
    const updatedResult = await Warehouse.findByIdAndUpdate(
      { _id: req.body.warehouseId },
      {
        userID: req.body.userId,
        city: req.body.city,
        area: req.body.area,
        warehouseNumber: req.body.warehouseNumber,
      },
      { new: true }
    );
    await WarehouseHistory.create({
      userID: userId,
      city: updatedResult.city,
      area: updatedResult.area,
      warehouseNumber: updatedResult.warehouseNumber,
      requestType: "Warehouse Updated",
    });

    console.log(updatedResult);
    res.json(updatedResult);
  } catch (error) {
    console.log(error);
    res.status(402).send("Error");
  }
};

// Search Warehouses
const searchWarehouse = async (req, res) => {
  const searchTerm = req.query.searchTerm;
  const warehouses = await Warehouse.find({
    name: { $regex: searchTerm, $options: "i" },
  });
  res.json(warehouses);
};

module.exports = {
  addWarehouse,
  getAllWarehouses,
  deleteSelectedWarehouse,
  updateSelectedWarehouse,
  searchWarehouse,
  getAllCities,
};
