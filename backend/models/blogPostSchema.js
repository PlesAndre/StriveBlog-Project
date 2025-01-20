import mongoose from "mongoose";
import "dotenv/config";

const blogPostSchema = new mongoose.Schema({
  categoria: String,
  titolo: String,
  cover: String,
  readTime: {
    value: Number,
    unit: String,
  },
  autore: String,
  contenuto: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

// comments = è definito un array di oggetti dove all'interno fa riferimento al modello "Comment" in questo caso referencing

const BlogPost = mongoose.model(
  process.env.BLOG_POST_COLLECTION,
  blogPostSchema
);

export default BlogPost;
