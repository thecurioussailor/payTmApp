const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();

const dburl = process.env.DB_URL;

mongoose.connect(dburl);

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});


const User = mongoose.model("User",userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
};