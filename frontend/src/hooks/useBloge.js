import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useBloge = () => {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_API_URL;

  const BlogePost = async (title, content, catagory, date, image, author) => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("catagory", catagory);
      formData.append("date", date);
      formData.append("author", author);
      formData.append("image", image); // ✅ Correctly append the image

      const response = await axios.post(`${url}/api/blog/post`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // ✅ Correct header
        },
      });

      if (response.status >= 200 && response.status < 300) {
        toast.success("Blog Posted!");
        navigate("/blog");
        return response.data;
      }
      console.log("BlogePost Response:", response);
    } catch (error) {
      console.error("BlogePost Error:", error);
      toast.error(error.response?.data?.message || "Something went wrong!");
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };

  return { BlogePost };
};

export default useBloge;
