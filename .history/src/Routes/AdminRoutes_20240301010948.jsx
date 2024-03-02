import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { AuthContext } from "../providers/AuthProvider";

const AdminRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email === "wahidahmed5037@gmail.com") {
      setIsAdmin(true);
    }
  }, [user?.email]);

  const location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
