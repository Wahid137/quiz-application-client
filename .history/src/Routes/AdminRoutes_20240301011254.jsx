import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { AuthContext } from "../providers/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  let isAdmin = false; // Initialize isAdmin to false by default

  if (user?.email === "wahidahmed5037@gmail.com") {
    isAdmin = true; // Set isAdmin to true if the user's email matches
  }

  const location = useLocation();

  if (loading) {
    return <Loader />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
