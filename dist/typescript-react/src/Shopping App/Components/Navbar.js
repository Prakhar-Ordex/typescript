"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../Redux/hooks");
const UserSlice_1 = require("../Redux/UserSlice");
const Navbar = () => {
    var _a;
    const state = (0, hooks_1.useAppSelector)((state) => state.productsData);
    const user = (0, hooks_1.useAppSelector)((state) => state.userData);
    const dispatch = (0, hooks_1.useAppDispatch)();
    return (<nav className="bg-white border-gray-200 dark:bg-gray-700 fixed top-0 left-0 right-0 z-10 w-full  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {user.loginUser ? (<span className="self-center font-semibold whitespace-nowrap dark:text-white flex items-center">
            <img src={user.loginUser.avatar} alt={user.loginUser.role} className="object-cover h-12 w-12 rounded-full"/>
            <p className="text-xl font-serif ">
              {" "}
              {(_a = user.loginUser.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}
            </p>
          </span>) : (<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Not Login
          </span>)}

        <button className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
          <span className="text-xl">Items Total Price = {state.total} $</span>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-700 md:dark:bg-gray-700 dark:border-gray-700">
            <li>
              <react_router_dom_1.Link to="/" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Home
              </react_router_dom_1.Link>
            </li>
            <li className="relative ">
              <react_router_dom_1.Link to="/cart" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Cart
              </react_router_dom_1.Link>

              <span className="absolute top-[-12px] right-[-10px] text-red-500 font-bold text-md ">
                {state.cart.length}
              </span>
            </li>
            <li>
              <react_router_dom_1.Link to="/profile" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Profile
              </react_router_dom_1.Link>
            </li>
            {user.loginUser ? (<li className="bg-red-600 px-2 py-1 rounded-md text-white " onClick={() => {
                if (confirm("are you sure you want to log out?")) {
                    dispatch((0, UserSlice_1.logoutUser)());
                }
            }}>
                logout
              </li>) : (<>
                <li>
                  <react_router_dom_1.Link to="/login" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white " aria-current="page">
                    Login
                  </react_router_dom_1.Link>
                </li>
                <li>
                  <react_router_dom_1.Link to="/register" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white " 
        // md:dark:text-blue-500
        aria-current="page">
                    Register
                  </react_router_dom_1.Link>
                </li>
              </>)}
          </ul>
        </div>
      </div>
    </nav>);
};
exports.default = Navbar;
