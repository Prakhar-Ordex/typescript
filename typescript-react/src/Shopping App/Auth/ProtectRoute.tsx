import { isAuthenticated } from "../utils/Auth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = () => {
  const isUserAuthenticated = isAuthenticated();

  return isUserAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoute;
