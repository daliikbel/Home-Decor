const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    telephoneNumber: {
      type: Number,
    },
    userType: {
      type: String,
      enum: ["customer", "company"],
      required: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
