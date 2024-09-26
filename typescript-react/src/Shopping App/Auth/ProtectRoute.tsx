import { useEffect, useState } from "react";
import { isAuthenticated } from "../utils/Auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { logoutUser } from "../Redux/UserSlice";

const ProtectRoute = () => {
  const loaction = useLocation();
  const dispatch = useAppDispatch();
  const { users, loginUser } = useAppSelector((state) => state.userData);
  const [isAuth, setIsAuth] = useState<boolean>(isAuthenticated(users));
  useEffect(() => {
    if (!isAuthenticated(users)) {
      setIsAuth(false);
      dispatch(logoutUser())
    }
  }, [loginUser, users,loaction,dispatch]);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};``

export default ProtectRoute;
