import React from "react";

import PopulerBlog from "../components/ui/PopulerBlog";
import LandingPage from "../components/ui/LandingPage";
import Subscribe from "../components/ui/Subscribe";
import BlogCard from "../components/ui/BlogsCard";

const Home = () => {
  return (
    <div className="min-h-screen w-full px-4scroll-smooth">
      <LandingPage />
      <PopulerBlog />
      <BlogCard />
      <Subscribe />
    </div>
  );
};

export default Home;
