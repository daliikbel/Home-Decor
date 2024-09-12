const cloudinary = require("../helpers/cloudinary.config");
const Post = require("../models/post.schema");

const postCtrl = {
  addPost: async (req, res) => {
    try {
      const { title, description, image } = req.body;
      const userId = req.user.id;
      const userType = req.user.userType; 

      if (userType !== 'company') {
        return res.status(403).json({ message: "Only companies can add posts." });
      }
      const newPost = new Post({
        title,
        description,
        owner: userId,
      });

      if (image) {
        const savedImage = await cloudinary.uploader.upload(image, {
          upload_preset: "project cloudinary",
        });

        if (!savedImage) {
          return res
            .status(500)
            .json("Error occurred while uploading the image");
        }

        newPost.image = {
          url: savedImage.url,
          public_id: savedImage.public_id,
        };
      }

      await newPost.save();
      return res.status(201).json("Post added successfully");
    } catch (error) {
      console.error("Error adding post:", error);
      return res.status(500).json({ message: "Internal server error", error });
    }
  },

  updatePost: async (req, res) => {
    try {
      const postId = req.params.id;

      const existPost = await Post.findOne({
        _id: postId,
      });

      if (!existPost) {
        return res.status(404).json("post does not exist");
      }
      const { title, description } = req.body;
      const updatedPost = await Post.updateOne(
        { _id: postId },
        {
          $set: {
            title,
            description,
            updatedAt: new Date(),
          },
        }
      );

      return res.status(200).json(updatedPost);
    } catch (error) {
      console.log("err", error);
      return res.status(500).json(error);
    }
  },
};
module.exports = postCtrl;
