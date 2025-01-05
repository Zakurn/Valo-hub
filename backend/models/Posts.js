const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id:Number,
    title:String,
    desc:String,
    date:String,
    img_url:String,
},{versionKey: false});

const Post = mongoose.model("Post",postSchema,"posts");

module.exports = Post;