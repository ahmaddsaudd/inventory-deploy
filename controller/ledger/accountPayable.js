const accountPayable = require("../../models/ledgers/accountPayable");

const getAccountPayable = async (req, res) => {
  try {
    const name = req.query.encodedName;
    const decodedName = decodeURIComponent(name);
    const result = await accountPayable.find({ name: decodedName });
    res.json(result);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

const addTransaction = async (req, res) => {
  try {
    const name = req.query.encodedName;
    const decodedName = decodeURIComponent(name);

    if (!decodedName) {
      return res.status(400).json({ message: "Supplier name is required" });
    }

    const account = await accountPayable.findOne({ name: decodedName });

    if (!account) {
      return res
        .status(404)
        .json({ message: "Account not found for the specified supplier" });
    }
    //add new id, date only not time, item, quantity
    const newTransaction = {
      date: new Date(),
      amount: 0,
      type: "debit",
      debit: req.body.debit,
      credit: 0,
    };

    account.transactions.push(newTransaction);

    const transactionAmount = req.body.debit;

    account.total = Number(account.total) + Number(transactionAmount);

    await account.save();

    res.status(200).json({ message: "Transaction added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAccountPayable, addTransaction };
