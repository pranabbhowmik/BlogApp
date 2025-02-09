import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetblog from "../../hooks/useGetblog";
import PostCard from "./PostCard";
import Loadinganimation from "./Loadinganimation";

function BlogCard({ searchTerm }) {
  const { Getblog } = useGetblog();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await Getblog();
      if (data) {
        setPosts(data.blogs || []);
      }
      setIsLoading(false); // Set loading to false after data is fetched
    };

    fetchBlogs();
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm) ||
      post.author.toLowerCase().includes(searchTerm)
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
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
