import mongoose from 'mongoose';
const { Schema } = mongoose;

const topic = new Schema({
  title:  { type: String, required: true },
  description: { type: String, required: true },
  user_id: { type: String, required: true },
  creationDate: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model("Topic", topic);