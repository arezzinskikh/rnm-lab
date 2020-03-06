const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  id: Number,
  first_name: String,
  last_name: String,
  title: String,
  age: Number
});

mongoose.model("users", userSchema);
