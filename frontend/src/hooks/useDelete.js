import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useDeleteBlog = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const deleteBlog = async (postId) => {
    setIsLoading(true);
    setError(null);

    try {
      await axios.delete(`/api/blog/delete/${postId}`);
      toast.success("Blog post deleted successfully");
      return true;
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "An error occurred while deleting the blog post.";
      setError(errorMessage);
      toast.error(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteBlog, isLoading, error };
};

export default useDeleteBlog;
