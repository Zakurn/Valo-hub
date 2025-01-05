const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Post = require('../models/Posts');
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ _id: username });

  if (!user) {
    return res.status(404).json({ message: "Username SALAH!!!" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    const token = jwt.sign({ username: user._id, name: user.name }, "Rahasia", {
      expiresIn: "30m",
    });

    return res.status(200).json({ username: username, token: token, expiresIn: 1800 });
  } else {
    return res.status(400).json({ message: "Password SALAH!!!" });
  }
});

router.post("/register", async (req, res) => {
  const { username, name, password, email } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);
  const userSudahAda = await User.findOne({
    _id: username,
  });

  if (userSudahAda) {
    return res.status(409).json({ message: "Username sudah ada" });
  }

  let buatUser = await User.create({
    _id: username,
    name: name,
    email: email,
    password: hashedPass,
  });
  return res.status(201).json(buatUser);
});

router.get("/posts",async (req,res) => {
  const posts = await Post.find().exec();
  return res.status(200).json(posts);
})

router.delete("/posts/:title",async (req,res) =>{
  const postTitle = req.params.title;
  const posts = await Post.deleteOne({"title":postTitle});

  if (!posts) {
    return res.status(404).send({ message: "Post ga ketemu" });
  }
  res.send({ message: "Post deleted successfully" });
})

module.exports = router;
