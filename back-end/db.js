const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://callmetomashu111:qSlTddLCi31XqamJ@cluster1.e3zwhtb.mongodb.net/paytm')

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