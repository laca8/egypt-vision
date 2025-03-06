const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: "./config.env" });
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("db connect....");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
