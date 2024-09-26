"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../Redux/hooks");
const ProductSlice_1 = require("../Redux/ProductSlice");
const Cart = () => {
    const state = (0, hooks_1.useAppSelector)((state) => state.productsData);
    const dispatch = (0, hooks_1.useAppDispatch)();
    return (<div className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 min-h-screen">
      <div className="container text-center mt-20 m-auto " style={{ width: "700px" }}>
        {state.cart.length == 0 && (<>
            <h1 className="p-2 text-5xl font-bold mb-5 text-white">Your Cart is Empty</h1>
            <react_router_dom_1.Link to={"/"} className="bg-blue-500 text-2xl text-white rounded-md p-1.5 ">
              Continue Shopping...
            </react_router_dom_1.Link>
          </>)}

        {state.cart.length != 0 && (<button onClick={() => dispatch((0, ProductSlice_1.clearCart)())} className="bg-red-500 text-2xl rounded-md p-1 text-white">
            Clear Cart
          </button>)}
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {state.cart.map((item, index) => (<li key={index} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img alt="" src={item.image} className="h-16 w-16 flex-none  bg-gray-50"/>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-white">
                  {item.title} <span>({item.quantity})</span>
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-white">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <strong className="text-sm leading-6 text-white">
                {item.price} $
              </strong>

              <div className="mt-1 flex items-center gap-x-1.5 p-1">
                <button className="bg-red-500 text-white rounded-md p-0.5 px-2" onClick={() => dispatch((0, ProductSlice_1.decrementQuantity)(item))}>
                  -
                </button>
                <div className="bg-gray-500 text-white rounded-md p-0.5 px-2">
                  {item.quantity}
                </div>
                <button className="bg-red-500 text-white rounded-md p-0.5 px-2" onClick={() => dispatch((0, ProductSlice_1.incrementQuantity)(item))}>
                  +
                </button>
              </div>
              <div className="mt-1 flex items-center gap-x-1.5 p-1">
                <button className="bg-red-500 text-white rounded-md p-0.5 px-2" onClick={() => dispatch((0, ProductSlice_1.removeFromCart)(item))}>
                  ❌
                </button>
              </div>
            </div>
          </li>))}
      </ul>
      {state.cart.length > 0 && (<div className="container text-center m-auto text-white">
          <h2 className="text-xl font-bold mb-1">Total Amount: {state.total}$ Only</h2>
          <react_router_dom_1.Link to={"/order"} className="bg-blue-500 text-2xl text-white rounded-md p-1.5 ">
            Checkout
          </react_router_dom_1.Link>
        </div>)}
      
    </div>);
};
exports.default = Cart;
