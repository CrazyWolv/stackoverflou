const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const { Schema } = mongoose;

const user = new Schema({
  firstname:  { type: String, required: true },
  lastname:  { type: String, required: true },
  nickname:  { type: String, required: true },
  email:  { type: String, unique: true, required: true },
  password:  { type: String, required: true },
  creationDate: { type: Date, default: Date.now, required: true },
}).plugin(uniqueValidator);

module.exports = mongoose.model("User", user);