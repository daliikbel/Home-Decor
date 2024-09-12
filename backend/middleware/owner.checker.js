const Post = require("../models/post.schema");

const checkOwner = async (req, res, next) => {
  try {
    const existPost = await Post.findOne({
      _id: req.params.id,
      owner: req.user.id,
    });

    if (!existPost) {
      return res.status(404).json("You are not authorized to update this post");
    }
    next();
  } catch (error) {
    console.log("error", error);
    return res.status(500).json("An error occurred");
  }
};

module.exports = checkOwner;
