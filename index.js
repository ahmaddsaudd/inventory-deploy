const mongoose = require("mongoose");

const uri = "mongodb+srv://MustafaAhmedSiddiqui:Mustafa15@firstcluster.ol1cziy.mongodb.net/inventory";

function main() {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB Atlas successfully!");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB Atlas:", err);
    });
}

module.exports = { main };
