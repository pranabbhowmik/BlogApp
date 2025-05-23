import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  EllipsisVertical,
  Edit,
  Trash2,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import { toast } from "react-toastify";
import useLike from "../../hooks/useLike.js"; // Import useLike hook

const PostCard = ({ post, onDelete }) => {
  const { like, fetchLikes, likeData } = useLike();
  const [liked, setLiked] = useState(false);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetchLikes(post._id);
  }, [post._id]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLike = async () => {
    await like(post._id);
    setLiked(!liked);
  };

  const handleCopy = () => {
    const url = window.location.origin + `/blog/${post._id}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("Copied the URL Successfully!");
      })
      .catch(() => {
        toast.error("Failed to copy the URL.");
      });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:border-purple-500 transition-all duration-300 ease-in-out relative">
      <img
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2 relative">
          <span className="text-sm text-purple-600 font-medium">
            {post.category}
          </span>
          <span className="text-xs text-gray-500">{post.date}</span>
          <button
            className="text-gray-500 hover:text-gray-700 transition-colors"
            onClick={toggleMenu}
          >
            <EllipsisVertical className="cursor-pointer" size={20} />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 top-8 bg-white border border-gray-300 rounded-md shadow-lg w-28 z-10">
              <Link to={`/edit-blog/${post._id}`}>
                <button className="flex items-center w-full px-3 py-2 hover:bg-gray-100 text-gray-700">
                  <Edit size={16} className="mr-2" /> Edit
                </button>
              </Link>
              <hr />
              <button
                onClick={() => onDelete(post._id)}
                className="flex items-center w-full px-3 py-2 hover:bg-gray-100 text-red-600"
              >
                <Trash2 size={16} className="mr-2" /> Delete
              </button>
            </div>
          )}
        </div>
        <Link to={`/blog/${post._id}`}>
          <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-800">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mb-1">By {post.author}</p>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {post.content}
        </p>

        <div className="flex justify-between items-center mt-4 border-t pt-2 text-gray-600 text-sm">
          <button
            className={`flex items-center space-x-1 ${
              liked ? "text-red-500" : ""
            }`}
            onClick={handleLike}
          >
            <Heart size={18} className={liked ? "fill-red-500" : ""} />
            <span>{likeData.likeCount}</span>
          </button>

          <Link
            to={`/blog/${post._id}#comments`}
            className="flex items-center space-x-1 hover:text-blue-500"
          >
            <MessageCircle size={18} />
            <span>{post.comments || 0}</span>
          </Link>

          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 hover:text-green-500"
          >
            <Share2 size={18} />
            <span>Share</span>
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          Liked by:{" "}
          {likeData.likedUsers?.length
            ? likeData.likedUsers.join(", ")
            : "No likes yet"}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
