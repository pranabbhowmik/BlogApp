import React from "react";
import BlogCard from "../components/ui/BlogsCard";
import Subscribe from "../components/ui/Subscribe";

function Blog() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto  py-12">
        <div className="text-center mt-16 mb-12">
          <p className=" text-center  text-gray-600">OUR BLOGS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Find our all blogs from here
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our blogs are written from very research research and well known
            writers writers so that we can provide you the best blogs and
            articles articles for you to read them all along
          </p>
        </div>
        <BlogCard />
        <Subscribe />
      </div>
    </div>
  );
}

export default Blog;
