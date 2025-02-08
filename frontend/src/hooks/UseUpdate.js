// src/hooks/useUpdate.js
import { useState, useEffect } from "react";
import axios from "axios";

const useUpdate = (blogId) => {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (blogId) {
      fetchBlogData(blogId);
    }
  }, [blogId]);

  const fetchBlogData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/blog/${id}`); // Corrected GET URL
      setBlogData(response.data);
    } catch (err) {
      setError(err);
      console.error("Error fetching blog:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateBlog = async (updatedData) => {
    try {
      console.log(`Updating blog with ID: ${blogId}`, updatedData);
      await axios.put(`http://localhost:5000/api/blog/${blogId}`, updatedData); // Corrected PUT URL
    } catch (err) {
      setError(err);
      console.error("Error updating blog:", err.response?.data || err.message);
    }
  };

  return { blogData, loading, error, updateBlog };
};

export default useUpdate;
