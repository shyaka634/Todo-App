import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: String,
  userId: mongoose.Schema.Types.ObjectId
});

export default mongoose.model("Todo", todoSchema);
