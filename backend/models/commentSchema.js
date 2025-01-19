import mongoose from "mongoose";
import "dotenv/config";

const commentSchema = new mongoose.Schema({
  autore: String,
  commento: String,
});

const Comment = new mongoose.model(
  process.env.COMMENT_COLLECTION,
  commentSchema
);

export default Comment;
