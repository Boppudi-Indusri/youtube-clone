import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  videoId: String,
  user: String,
  text: String
});

export default mongoose.model("Comment", commentSchema);
