const express = require("express");
const { main } = require("./index");
const productRoute = require("./router/product/product");
const storeRoute = require("./router/vendors/store");
const orderRoute = require("./router/orders/orders");
const itemRoute = require("./router/items/items");
const warehouseRoute = require("./router/warehouses/warehouses");
const warehouseHistoryRoute = require("./router/warehouses/warehouseHistory");
const supplierRoute = require("./router/suppliers/supplier");
const grnRoute = require("./router/grn/grn");
const grrnRoute = require("./router/grrn/grrn");
const grrnHistoryRoute = require("./router/grrn/grrnHistory");
const grnHistoryRoute = require("./router/grn/grnHistory");
const supplierHistoryRoute = require("./router/suppliers/supplierHistory");
const itemHistoryRoute = require("./router/items/itemHistory");
const stockHistoryRoute = require("./router/orders/stockHistory");
const productHistoryRoute = require("./router/product/productHistory");
const storeHistoryRoute = require("./router/vendors/storeHistory");
const accountPayableRoute = require("./router/ledger/accountPayable");
const accountReceivableRoute = require("./router/ledger/accountReceivable");

const cors = require("cors");
const User = require("./models/users/users");

const app = express();
const PORT = 4000;
main();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.send("hello vercel");
})
// Store API
app.use("/api/store", storeRoute);

app.use("/api/account/payable", accountPayableRoute);
app.use("/api/account/receivable", accountReceivableRoute);

// Products API
app.use("/api/product", productRoute);

// Orders API
app.use("/api/order", orderRoute);

// Items API
app.use("/api/item", itemRoute);

// Warehouse API
app.use("/api/warehouse", warehouseRoute);

// Supplier API
app.use("/api/supplier", supplierRoute);

// GRN API
app.use("/api/grn", grnRoute);

// GRRN API
app.use("/api/grrn", grrnRoute);

// GRRN History API
app.use("/api/grrnHistory", grrnHistoryRoute);

// GRN History API
app.use("/api/grnHistory", grnHistoryRoute);

// Supplier History API
app.use("/api/supplierHistory", supplierHistoryRoute);

// Warehouse History API
app.use("/api/warehouseHistory", warehouseHistoryRoute);

// Item History API
app.use("/api/itemHistory", itemHistoryRoute);

// Stock History API
app.use("/api/stockHistory", stockHistoryRoute);

// Product History API
app.use("/api/productHistory", productHistoryRoute);

// Store History API
app.use("/api/storeHistory", storeHistoryRoute);

// ------------- Signin --------------
let userAuthCheck;
app.post("/api/login", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
    });
    console.log("USER: ", user);
    if (user) {
      res.send(user);
      userAuthCheck = user;
    } else {
      res.status(401).send("Invalid Credentials");
      userAuthCheck = null;
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// Getting User Details of login user
app.get("/api/login", (req, res) => {
  res.send(userAuthCheck);
});
// ------------------------------------

// Registration API
app.post("/api/register", (req, res) => {
  let registerUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
  });

  registerUser
    .save()
    .then((result) => {
      res.status(200).send(result);
      alert("Signup Successfull");
    })
    .catch((err) => console.log("Signup: ", err));
  console.log("request: ", req.body);
});

// Here we are listening to the server
app.listen(PORT, () => {
  console.log("I am live again");
});
