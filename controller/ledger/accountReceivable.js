const accountReceivable = require("../../models/ledgers/accountReceivable");

const getAccountReceivable = async (req, res) => {
  try {
    const name = req.query.encodedName;
    const decodedName = decodeURIComponent(name);
    const result = await accountReceivable.find({ name: decodedName });
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
      return res.status(400).json({ message: "Vendor name is required" });
    }

    const account = await accountReceivable.findOne({ name: decodedName });

    if (!account) {
      return res
        .status(404)
        .json({ message: "Account not found for the specified supplier" });
    }

    const newTransaction = {
      date: new Date(),
      amount: 0,
      type: "credit",
      debit: 0,
      credit: req.body.credit,
    };

    account.transactions.push(newTransaction);

    const transactionAmount = req.body.credit;

    account.total = Number(account.total) - Number(transactionAmount);

    await account.save();

    res.status(200).json({ message: "Transaction added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAccountReceivable, addTransaction };
