import BlogPost from "../models/blogPostSchema.js";

const getAllBlogPosts = async (req, res, next) => {
  try {
    const getPosts = await BlogPost.find({});
    res.json(getPosts);
    return getPosts;
  } catch (error) {
    console.log(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await BlogPost.findById({ _id: id });
    res.json(post);
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    const newPost = await BlogPost.create(req.body);
    res.status(201).json("Post aggiunto corretamente");
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const editPost = await BlogPost.findByIdAndUpdate(id, req.body);
    res.status(200).json("Post aggiornato correttamente");
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletePost = await BlogPost.findByIdAndDelete(id);
    res.status(200).json("Autore cancellato correttamente");
  } catch (error) {
    console.log(error);
  }
};

const getPaginatedPosts = async (req, res, next) => {
  try {
    const page = req.params.page;
    const getAllPosts = await BlogPost.find({})
      .limit(8)
      .skip(6 * (page - 1));
    res.json(getAllPosts);
  } catch (error) {
    console.log(error);
  }
};

const getBlogPagesCount = async (req, res, next) => {
  try {
    const count = await BlogPost.countDocuments();
    const pages = Math.ceil(count / 6);
    res.json(pages);
  } catch (error) {
    console.log();
  }
};

export {
  getAllBlogPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getPaginatedPosts,
  getBlogPagesCount,
};
