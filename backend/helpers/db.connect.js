const mongoose = require("mongoose");

const URI = process.env.DB_URI;

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(URI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log("error", error);
  }
};
module.exports = connectToMongo;
