import Comment from "../models/commentSchema.js";
import BlogPost from "../models/blogPostSchema.js";

const getComments = async (req, res, next) => {
  try {
    const getAllComments = await Comment.find({});
    res.json(getAllComments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Errore durante il recupero dei commenti" });
  }
};

const createComment = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const newComment = await Comment.create(req.body);
    const targetPost = await BlogPost.findByIdAndUpdate(postId, {
      $push: { comments: newComment._id },
    });
    res.status(201).json("Commento aggiunto correttamente");
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json("Errore durante l'aggiunta del commento");
  }
};

export { getComments, createComment };
