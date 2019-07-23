const Post = require("../models/Post");

exports.postApost = async (req, res) => {
  await Post.create({ ...req.body });

  res.status(201).json({ message: "se creo ahuevo" });
};
