import { toast } from "react-toastify";
import axios from "axios";

const useContact = () => {
  const url = import.meta.env.VITE_API_URL;

  const sendMessage = async (formData) => {
    try {
      const response = await axios.post(`${url}/api/mail/contact`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status >= 201 && response.status < 300) {
        toast.success("Message sent successfully!");
      }
    } catch (error) {
      console.error("Message Error:", error);
      toast.error(
        error.response?.data?.message || "Message failed. Please try again."
      );
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };
  return { sendMessage };
};

export default useContact;
