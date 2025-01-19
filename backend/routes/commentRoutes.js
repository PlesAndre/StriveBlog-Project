import express from "express";
import { createComment, getComments } from "../queries/commentQueries.js";

const router = express.Router();

router.get("/", getComments);
router.post("/:id", createComment);

export { router };
