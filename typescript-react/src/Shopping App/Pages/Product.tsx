import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import {
  addToCart,
  decrementQuantity,
  fetchCart,
  fetchProducts,
  incrementQuantity,
} from "../Redux/ProductSlice";
import { addCart } from "../Redux/UserSlice";
import { store } from "../Redux/store";

const Product = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.productsData);
  useEffect(() => {
    dispatch(fetchProducts(null));
    dispatch(fetchCart())
  }, []);
  return (
    <div className="mt-20">
      <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-2 min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div>
              <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                All Products
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <select
                onChange={(e) => dispatch(fetchProducts(e.target.value || null))
      
            
                }
                data-modal-toggle="filterModal"
                data-modal-target="filterModal"
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
              >
                <option value="">Catagories</option>
                <option value="electronics">electronics</option>
                <option value="jewelery">jewelery</option>
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
              </select>

              <div
                id="dropdownSort1"
                className="z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                data-popper-placement="bottom"
              >
                <ul
                  className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                  aria-labelledby="sortDropdownButton"
                >
                  <li>
                    <a
                      href="#"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {" "}
                      The most popular{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {" "}
                      Newest{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {" "}
                      Increasing price{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {" "}
                      Decreasing price{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {" "}
                      No. reviews{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {" "}
                      Discount %{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {state.loading ? (
              <div className="  flex justify-center items-center">
                <span className="text-6xl text-pink-600">Loading</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                  <circle
                    fill="#FF156D"
                    stroke="#FF156D"
                    strokeWidth="15"
                    r="15"
                    cx="40"
                    cy="65"
                  >
                    <animate
                      attributeName="cy"
                      calcMode="spline"
                      dur="2"
                      values="65;135;65;"
                      keySplines=".5 0 .5 1;.5 0 .5 1"
                      repeatCount="indefinite"
                      begin="-.4"
                    ></animate>
                  </circle>
                  <circle
                    fill="#FF156D"
                    stroke="#FF156D"
                    strokeWidth="15"
                    r="15"
                    cx="100"
                    cy="65"
                  >
                    <animate
                      attributeName="cy"
                      calcMode="spline"
                      dur="2"
                      values="65;135;65;"
                      keySplines=".5 0 .5 1;.5 0 .5 1"
                      repeatCount="indefinite"
                      begin="-.2"
                    ></animate>
                  </circle>
                  <circle
                    fill="#FF156D"
                    stroke="#FF156D"
                    strokeWidth="15"
                    r="15"
                    cx="160"
                    cy="65"
                  >
                    <animate
                      attributeName="cy"
                      calcMode="spline"
                      dur="2"
                      values="65;135;65;"
                      keySplines=".5 0 .5 1;.5 0 .5 1"
                      repeatCount="indefinite"
                      begin="0"
                    ></animate>
                  </circle>
                </svg>
              </div>
            ) : (
              state.products.map((product, index) => (
                <div
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                  key={index}
                >
                  <div className="h-56 w-full">
                    <img
                      className="mx-auto hidden h-full dark:block"
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <div className="pt-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        {" "}
                        Up to 35% off{" "}
                      </span>

                      <div className="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          data-tooltip-target="tooltip-quick-look"
                          className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <span className="sr-only"> Quick look </span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeWidth="2"
                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                            />
                            <path
                              stroke="currentColor"
                              strokeWidth="2"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </button>
                        <div
                          id="tooltip-quick-look"
                          role="tooltip"
                          className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                          data-popper-placement="top"
                        >
                          Quick look
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow=""
                          ></div>
                        </div>

                        <button
                          type="button"
                          data-tooltip-target="tooltip-add-to-favorites"
                          className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <span className="sr-only"> Add to Favorites </span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                            />
                          </svg>
                        </button>
                        <div
                          id="tooltip-add-to-favorites"
                          role="tooltip"
                          className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                          data-popper-placement="top"
                        >
                          Add to favorites
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow=""
                          ></div>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                      {product.title}
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center">
                        <svg
                          className="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg
                          className="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg
                          className="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg
                          className="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg
                          className="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>
                      </div>

                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        5.0
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        (455)
                      </p>
                    </div>

                    <ul className="mt-2 flex items-center gap-4">
                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                          />
                        </svg>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Fast Delivery
                        </p>
                      </li>

                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                          />
                        </svg>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Best Price
                        </p>
                      </li>
                    </ul>

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                        $ {product.price}
                      </p>
                      {state.cart.some((item) => item.id === product.id) ? (
                        <div className="mt-1">
                          <span
                            className="bg-red-300  px-4 py-2 rounded-s-md cursor-pointer"
                            onClick={() => dispatch(decrementQuantity(product))}
                          >
                            -
                          </span>
                          <span className="bg-gray-300  px-4 py-2">
                            {
                              state.cart.find((item) => item.id === product.id)
                                ?.quantity
                            }
                          </span>
                          <span
                            className="bg-blue-300  px-4 py-2 rounded-e-md cursor-pointer"
                            onClick={() => {
                              dispatch(incrementQuantity(product));
                              dispatch(addCart({ state: store.getState()}));
                            }}
                          >
                            +
                          </span>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            dispatch(addToCart(product));
                            dispatch(addCart({ state: store.getState() }));
                          }}
                          type="button"
                          className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white  dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          <svg
                            className="-ms-2 me-2 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                            />
                          </svg>
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
