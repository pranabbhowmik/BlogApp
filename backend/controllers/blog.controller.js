import fs from "fs";
import { uploadCloudinaryImage } from "../utils/cloudinary.js";
import Blog from "../model/blog.model.js";

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, date, catagory, content, author } = req.body;
    if (!title || !date || !catagory || !content || !author) {
      return res.status(400).json({ message: "All fields are required" });
    }

    console.log("req.files:", req.files); // Debugging log

    const imageLocalPath = req.files?.image?.[0]?.path;
    console.log("imageLocalPath:", imageLocalPath); // Debugging log

    if (!imageLocalPath) {
      return res.status(400).json({ message: "Image is required" });
    }

    if (!fs.existsSync(imageLocalPath)) {
      console.error("File does not exist:", imageLocalPath); // Debugging log
      return res.status(400).json({ message: "Image file not found" });
    }

    const image = await uploadCloudinaryImage(imageLocalPath);
    if (!image) {
      return res.status(500).json({ message: "Failed to upload image" });
    }

    const blog = new Blog({
      title,
      date,
      catagory,
      content,
      author,
      image: image.url,
    });

    await blog.save();
    res.status(201).json({ message: "Blog created successfully" });
  } catch (error) {
    console.error("Blog Creation Error:", error.message); // Debugging log
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (!blogs) {
      return res.status(404).json({ message: "No blogs found" });
    }
    res.status(200).json({ blogs });
    return blogs;
  } catch (error) {
    console.error("Get Blogs Error:", error.message); // Debugging log
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { title, date, catagory, content, author } = req.body;
    if (!title || !date || !catagory || !content || !author) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const blog = new Blog({
      title,
      date,
      catagory,
      content,
      author,
    });

    await blog.save();
    res.status(201).json({ message: "Blog updated successfully" });
  } catch (error) {
    console.error("Blog Update Error:", error.message); // Debugging log
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Blog ID is required" });
    }

    await Blog.findByIdAndDelete(id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Blog Deletion Error:", error.message); // Debugging log
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { createBlog, getBlogs, updateBlog, deleteBlog };
