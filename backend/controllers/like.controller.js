import Blog from "../model/blog.model.js";
import { Like } from "../model/like.model.js";
import User from "../model/user.model.js"; // Import User model

// Like or Unlike a blog
const likeBlog = async (req, res) => {
  try {
    const { postId, userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const existingLike = await Like.findOne({ postId, userId });

    if (existingLike) {
      await Like.findByIdAndDelete(existingLike._id);
      return res.status(200).json({ message: "Unliked", liked: false });
    } else {
      const like = new Like({ postId, userId });
      await like.save();
      return res.status(201).json({ message: "Liked", liked: true });
    }
  } catch (error) {
    console.error("Like Blog Error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all likes with usernames
const getLikes = async (req, res) => {
  try {
    const { postId } = req.params;
    const likes = await Like.find({ postId }).populate("userId", "username");

    const likeCount = likes.length;
    const likedUsers = likes.map((like) => like.userId.username);

    res.status(200).json({ likeCount, likedUsers });
  } catch (error) {
    console.log("Get Likes Error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { likeBlog, getLikes };
