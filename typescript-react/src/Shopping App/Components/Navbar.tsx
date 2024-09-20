import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../Redux/hooks";

const Navbar = () => {
  const state = useAppSelector((state) => state.productsData)
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0 z-10 w-full  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  {/* {loginUser ? loginUser.name : "Not Loggin"} */}
                  NotLoggin 
        </span>

        <button className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
          <span className="text-xl">
            Cart Items Total Price = {state.total} ₹
          </span>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white "
                // md:dark:text-blue-500
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="relative ">
              <Link
                to="/cart"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Cart
              </Link>

              <span className="absolute top-[-12px] right-[-10px] text-red-500 font-bold text-md ">
                {state.cart.length}
              </span>
            </li>
            {/* <Link
            to="/users"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Users
          </Link> */}
            {/* {loginUser ? (
              <li
                className="block py-5 px-3 text-white bg-orange-700 rounded  md:text-blue-700 md:p-0 dark:text-white "
                onClick={() => {
                  if (confirm("are you sure you want to log out?")) {
                    dispatch(logoutUser());
                    navigate("/login");
                  }
                }}
              >
                logout
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white "
                    aria-current="page"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white "
                    // md:dark:text-blue-500
                    aria-current="page"
                  >
                    Register
                  </Link>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
