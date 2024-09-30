import { useEffect, useState } from "react";
import { isAuthenticated } from "../utils/Auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { logoutUser } from "../Redux/UserSlice";
import { toast } from "react-toastify";
import { fetchCart } from "../Redux/ProductSlice";

const ProtectRoute = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.userData);
  const [isAuth, setIsAuth] = useState<boolean>(isAuthenticated(users));
  useEffect(() => {
    if (!isAuthenticated(users)) {
      setIsAuth(false);
      dispatch(logoutUser())
      dispatch(fetchCart())
      toast.error('Unauthenticated user');
    }
  }, []);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};``

export default ProtectRoute;
