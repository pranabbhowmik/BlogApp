import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetblog from "../hooks/useGetblog";

function BlogDetails() {
  const { id } = useParams();
  const { Getblog } = useGetblog();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await Getblog();
      if (data) {
        const foundPost = data.blogs.find((blog) => blog._id === id);
        setPost(foundPost);
      }
    };
    fetchBlog();
    window.scrollTo(0, document.body.scrollHeight);

    // Smoothly scroll to the top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  }, [id]);

  if (!post) return <p className="text-center mt-10">Loading...</p>;

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 mt-16 lg:px-8">
      <header className="mb-8">
        <div className="text-sm text-gray-600 uppercase tracking-wider mb-4">
          {post.catagory} • {post.date}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
          {post.title}
        </h1>
      </header>

      <div className="rounded-lg overflow-hidden mb-8">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="prose max-w-none">
        <p className="text-gray-700 mb-6">{post.content}</p>
        <p className="text-purple-600 text-sm">By {post.author}</p>
      </div>
    </article>
  );
}

export default BlogDetails;
