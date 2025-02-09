import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetblog from "../hooks/useGetblog";

function BlogDetails() {
  const { id } = useParams();
  const { Getblog } = useGetblog();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]); // Add state to hold comments
  const [newComment, setNewComment] = useState(""); // State to hold the new comment
  const [showAllComments, setShowAllComments] = useState(false); // To toggle comment visibility

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await Getblog();
      if (data) {
        const foundPost = data.blogs.find((blog) => blog._id === id);
        setPost(foundPost);
        setComments(foundPost.comments || []); // Assuming the post has a `comments` field
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

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const updatedComments = [
        ...comments,
        {
          text: newComment,
          author: "Guest",
          date: new Date().toLocaleDateString(),
        },
      ];
      setComments(updatedComments);
      setNewComment(""); // Clear the input field
    }
  };

  if (!post) return <p className="text-center mt-10">Loading...</p>;

  const commentsToShow = showAllComments ? comments : comments.slice(0, 2);

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

      {/* Comment Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comments</h2>

        {/* Render comments */}
        {commentsToShow.map((comment, index) => (
          <div
            key={index}
            className="mb-4 p-4 border border-gray-200 rounded-lg"
          >
            <p className="text-gray-700">{comment.text}</p>
            <p className="text-sm text-gray-500 mt-2">
              - {comment.author}, {comment.date}
            </p>
          </div>
        ))}

        {/* Show more option */}
        {comments.length > 2 && !showAllComments && (
          <button
            onClick={() => setShowAllComments(true)}
            className="text-blue-500 mt-4"
          >
            Show More Comments
          </button>
        )}
        {comments.length > 2 && showAllComments && (
          <button
            onClick={() => setShowAllComments(false)}
            className="text-blue-500 mt-4"
          >
            Show Less Comments
          </button>
        )}

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mt-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-4 border border-gray-300 rounded-lg"
            rows="4"
          />
          <button
            type="submit"
            className="mt-4 bg-[#8A3FFC] hover:bg-[#5c25ae] hover:scale-105 text-white px-6 py-2 rounded-full"
          >
            Post Comment
          </button>
        </form>
      </section>
    </article>
  );
}

export default BlogDetails;
