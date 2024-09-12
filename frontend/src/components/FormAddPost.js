import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/slices/post.slice";

const FormAddPost = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.PostReducer.isLoading);
  const error = useSelector((state) => state.PostReducer.errors);

  const [selectedImage, setSelectedImage] = useState("");
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
  });
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleImgChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSelectedImage(reader.result);
        setNewPost({ ...newPost, image: reader.result });
      };
    } else {
      setFormError("Please select a valid image file.");
    }
  };

  const addNewPost = () => {
    if (!newPost.title || !newPost.description) {
      setFormError("Title and description are required!");
      return;
    }

    setFormError("");
    dispatch(addPost(newPost));

    setNewPost({
      title: "",
      description: "",
    });
    setSelectedImage("");
  };

  const displayError = (error) => {
    if (typeof error === "string") {
      return error;
    }
    if (typeof error === "object" && error !== null) {
      return error.message || JSON.stringify(error);
    }
    return "";
  };

  return (
    <div className="card border-0 bg-transparent">
      <div className="card-body">
        <h3 className="text-center text-white">Add your new post</h3>

        {formError && <div className="alert alert-danger">{formError}</div>}
        {error && <div className="alert alert-danger">Failed to add post. {displayError(error)}</div>}

        <div className="mb-3 text-center">
          <label className="form-label text-white">Post Image:</label>
          <input type="file" className="form-control" onChange={handleImgChange} />
          {selectedImage && <img src={selectedImage} width="250" height="250" alt="Preview" className="mt-2" />}
        </div>

        <div className="mb-3 text-center">
          <label className="form-label text-white">Post title:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Post title"
            name="title"
            value={newPost.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 text-center">
          <label className="form-label text-white">Post description:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Post description"
            name="description"
            value={newPost.description}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="card-footer bg-transparent border-0 text-center">
        <button
          className="btn"
          style={{ backgroundColor: '#EF4227', color: '#fff' }}
          disabled={isLoading}
          onClick={addNewPost}
        >
          {isLoading ? "Loading..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default FormAddPost;