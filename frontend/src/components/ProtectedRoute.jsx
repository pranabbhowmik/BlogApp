import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const authUser = localStorage.getItem("authUser"); // Check user authentication

  if (!authUser) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return children; // Render the protected component if authenticated
};

export default ProtectedRoute;
