const mongoose = require("mongoose");
const date = new Date();
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Job: {
    type: String,
    required: true,
  },
});
User = mongoose.model("user", userSchema);
module.exports = User;
