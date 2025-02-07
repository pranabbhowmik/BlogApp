import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate(); // Corrected this line
  const url = import.meta.env.VITE_API_URL;

  const login = async (email, password) => {
    try {
      const payload = { email, password };
      const response = await axios.post(`${url}/api/auth/login`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;
      if (response.status === 200) {
        toast.success("Login Success");
        setAuthUser(data.token);
        navigate("/");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.response.data.message);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };

  return { login };
};

export default useLogin;
