import express from "express";
import {
  getAllBlogPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getPaginatedPosts,
  getBlogPagesCount,
} from "../queries/blogPostQueries.js";

const router = express.Router();

router.get("/count", getBlogPagesCount);
router.get("/post/:id", getPostById);
router.get("/page/:page", getPaginatedPosts);
router.get("/", getAllBlogPosts);
router.post("/new", createPost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

export { router };
