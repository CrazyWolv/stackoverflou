import mongoose from 'mongoose';
const { Schema } = mongoose;

const message = new Schema({
  content:  { type: String, required: true },
  user_id:  { type: String, required: true },
  topic_id:  { type: String, required: true },
  creationDate: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model("Message", message);