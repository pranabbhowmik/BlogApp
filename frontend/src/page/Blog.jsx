import React, { useEffect, useState } from "react";
import BlogCard from "../components/ui/BlogsCard";
import Subscribe from "../components/ui/Subscribe";

function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null); // Added this line

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser.user); // Now setUser is defined
    }
    window.scrollTo(0, document.body.scrollHeight);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12">
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

        <div className="flex justify-center px-10 sm:px-2 mb-8">
          <input
            type="text"
            placeholder="Search Blogs"
            className="w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <BlogCard searchTerm={searchQuery} />
        <Subscribe />
      </div>
    </div>
  );
}

export default Blog;
