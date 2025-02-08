import React, { useEffect } from "react";

import PopulerBlog from "../components/ui/PopulerBlog";
import LandingPage from "../components/ui/LandingPage";
import Subscribe from "../components/ui/Subscribe";
import BlogCard from "../components/ui/BlogsCard";
import PostCard from "../components/ui/PostCard";
import PopularPosts from "./Popularposts";

const Home = () => {
  useEffect(() => {
    // Start at the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);

    // Smoothly scroll to the top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  }, []);
  return (
    <div className="min-h-screen w-full px-4scroll-smooth">
      <LandingPage />
      <PopulerBlog />
      <PopularPosts />
      <Subscribe />
    </div>
  );
};

export default Home;
