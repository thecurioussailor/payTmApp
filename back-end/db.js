const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://callmetomashu111:qSlTddLCi31XqamJ@cluster1.e3zwhtb.mongodb.net/paytm')

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const User = mongoose.model("User",userSchema);

module.exports = {
    User
};