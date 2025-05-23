import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useComment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = import.meta.env.VITE_API_URL;

  const addComment = async (blogId, commentData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${url}/api/blog/${blogId}/comment`,
        commentData
      );
      setLoading(false);
      toast.success("Comment added!");
      return response.data.comment;
    } catch (err) {
      setLoading(false);
      const errorMessage =
        err.response?.data?.message || "Failed to add comment";
      setError(errorMessage);
      toast.error(errorMessage);
      throw err;
    }
  };

  const getComments = async (blogId) => {
    try {
      const response = await axios.get(`${url}/api/blog/${blogId}/comments`);
      return response.data.comments;
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Failed to fetch comments";
      setError(errorMessage);
      toast.error(errorMessage);
      throw err;
    }
  };

  return { addComment, getComments, loading, error };
};

export default useComment;
