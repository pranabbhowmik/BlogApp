import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetblog from "../../hooks/useGetblog";
import PostCard from "./PostCard";
import Loadinganimation from "./Loadinganimation";
import { FaSearch } from "react-icons/fa";

function BlogCard() {
  const { Getblog } = useGetblog();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await Getblog();
      if (data) {
        setPosts(data.blogs || []);
      }
      setIsLoading(false);
    };

    fetchBlogs();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const title = post.title?.toLowerCase() || "";
    const content = post.content?.toLowerCase() || "";
    const author = post.author?.toLowerCase() || "";
    return (
      title.includes(searchTerm) ||
      content.includes(searchTerm) ||
      author.includes(searchTerm)
    );
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mt-16 mb-12">
        <p className="text-center text-gray-600">OUR BLOGS</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Find our all blogs from here
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our blogs are written from very researched and well-known writers so
          that we can provide you the best blogs and articles for you to read.
        </p>
      </div>

      {/* 🔍 Search Input */}
      <div className="relative w-full max-w-2xl mx-auto mb-8">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* 📝 Blog List */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Popular Post
        </h2>
        <Link to="/blog">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
            View All
          </button>
        </Link>
      </div>

      {isLoading ? (
        <Loadinganimation />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => <PostCard key={post._id} post={post} />)
          ) : (
            <p className="text-gray-500">No blogs found.</p>
          )}
        </div>
      )}
    </section>
  );
}

export default BlogCard;
