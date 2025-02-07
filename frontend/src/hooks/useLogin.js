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
      console.log("Login response:", data);

      if (response.status === 200) {
        console.log("Login Success");
        toast.success("Login Success");
        setAuthUser(data.token);
        navigate("/");
      }
    } catch (error) {
      console.error("Login Error:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
      toast.error("Login Failed");
    }
  };

  return { login };
};

export default useLogin;
