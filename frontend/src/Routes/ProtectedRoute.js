import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../services/authApi";

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
