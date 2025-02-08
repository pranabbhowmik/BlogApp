import express from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  updateBlog,
} from "../controllers/blog.controller.js";

const router = express.Router();

router
  .route("/post")
  .post(upload.fields([{ name: "image", maxCount: 1 }]), createBlog);

router.route("/blogs").get(getBlogs);

router.put("/update/:id", updateBlog);

router.delete("/delete/:id", deleteBlog);

export default router;
