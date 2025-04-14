import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";

const useLike = () => {
  const { authUser } = useAuthContext();
  const url = import.meta.env.VITE_API_URL;
  const [likeData, setLikeData] = useState({ likeCount: 0, likedUsers: [] });

  const like = async (postId) => {
    console.log("Attempting to like post:", {
      postId,
      userId: authUser.user?._id,
    });

    try {
      const response = await axios.post(
        `${url}/api/post/like`,
        { postId, userId: authUser.user?._id }, // Ensure userId is included
        {
          headers: {
            Authorization: `Bearer ${authUser?.token}`,
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Like Error:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };

  const fetchLikes = async (postId) => {
    try {
      const response = await axios.get(`${url}/api/post/likes/${postId}`);
      setLikeData(response.data);
    } catch (error) {
      console.error("Fetch Likes Error:", error);
    }
  };

  return { like, fetchLikes, likeData };
};

export default useLike;
