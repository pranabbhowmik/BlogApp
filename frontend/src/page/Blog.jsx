import React, { useEffect, useState } from "react";
import BlogCard from "../components/ui/BlogsCard";
import Subscribe from "../components/ui/Subscribe";

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleRightClick = (e) => {
      const selectedText = window.getSelection().toString().trim();
      if (selectedText.length > 0) {
        setSearchTerm(selectedText.toLowerCase());
      }
    };

    document.addEventListener("contextmenu", handleRightClick);
    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12">
        <BlogCard searchTerm={searchTerm} />
        <Subscribe />
      </div>
    </div>
  );
}

export default Blog;
