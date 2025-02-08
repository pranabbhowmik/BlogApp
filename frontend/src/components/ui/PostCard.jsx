import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { EllipsisVertical, Edit, Trash2 } from "lucide-react";

const PostCard = ({ post, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const handleDelete = () => {
    onDelete(post._id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:border-purple-500 transition-all duration-300 ease-in-out relative">
      <img
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div
          className="flex justify-between items-center mb-2 relative"
          ref={menuRef}
        >
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
                onClick={handleDelete}
                className="flex items-center w-full px-3 py-2 hover:bg-gray-100 text-red-600"
              >
                <Trash2 size={16} className="mr-2" /> Delete
              </button>
            </div>
          )}
        </div>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-800">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm mb-1">By {post.author}</p>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {post.content}
        </p>
        <Link to={`/blog/${post._id}`}>
          <button className="text-purple-600 text-sm font-medium hover:text-purple-800 transition-colors">
            Read More...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
