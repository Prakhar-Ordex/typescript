"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Auth_1 = require("../utils/Auth");
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../Redux/hooks");
const ProtectRoute = () => {
    const loginUser = (0, hooks_1.useAppSelector)((state) => state.userData.loginUser);
    const [isAuth, setIsAuth] = (0, react_1.useState)((0, Auth_1.isAuthenticated)());
    (0, react_1.useEffect)(() => {
        setIsAuth((0, Auth_1.isAuthenticated)());
    }, [loginUser]);
    return isAuth ? <react_router_dom_1.Outlet /> : <react_router_dom_1.Navigate to="/login"/>;
};
exports.default = ProtectRoute;
