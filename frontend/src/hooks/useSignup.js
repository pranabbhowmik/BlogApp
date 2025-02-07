import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const url = import.meta.env.VITE_API_URL;

  const signup = async (email, password, phone, fullname) => {
    try {
      const payload = { email, password, phone, fullname };
      const response = await axios.post(`${url}/api/auth/register`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;
      console.log("Signup response:", data);

      if (response.status === 201) {
        console.log("Signup Success");
        toast.success("Signup Success");
        setAuthUser(data.token);
        navigate("/");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
      toast.error("Signup Failed");
    }
  };

  return { signup };
};

export default useSignup;
