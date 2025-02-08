import { toast } from "react-toastify";
import axios from "axios";

const useGetblog = () => {
  const url = import.meta.env.VITE_API_URL;

  const Getblog = async () => {
    try {
      const response = await axios.get(`${url}/api/blog/blogs`);
      if (response.status >= 200 && response.status < 300) {
        return response.data; // Assuming the API returns an array of blogs
      }
    } catch (error) {
      console.error("Getblog Error:", error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return { Getblog };
};

export default useGetblog;
