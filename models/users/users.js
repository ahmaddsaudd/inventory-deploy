const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: 'String',
    lastName : 'String',
    password: 'String',
    phoneNumber: 'Number',
});

const User = mongoose.model("users", UserSchema);
module.exports = User;