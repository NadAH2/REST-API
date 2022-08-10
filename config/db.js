const mongoose = require("mongoose");
const config = require("config");
const db = config.get("URL");

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("Connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
