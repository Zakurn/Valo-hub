const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id:String,
    name:String,
    email:String,
    password:String
},{versionKey: false});

const User = mongoose.model("User",userSchema,"users");

module.exports = User;