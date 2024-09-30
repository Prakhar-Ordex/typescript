import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { clearCart, decrementQuantity, incrementQuantity, removeFromCart } from "../Redux/ProductSlice";
import { addCart } from "../Redux/UserSlice";
import { store } from "../Redux/store";

const Cart = () => {
  const state = useAppSelector((state) => state.productsData);
  const dispatch = useAppDispatch();
  return (
    <div className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 min-h-screen">
      <div
        className="container text-center mt-20 m-auto "
        style={{ width: "700px" }}
      >
        {state.cart.length == 0 && (
          <>
            <h1 className="p-2 text-5xl font-bold mb-5 text-white">Your Cart is Empty</h1>
            <Link
              to={"/"}
              className="bg-blue-500 text-2xl text-white rounded-md p-1.5 "
            >
              Continue Shopping...
            </Link>
          </>
        )}

        {state.cart.length != 0 && (
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(addCart({ state: store.getState()}));
            }}
            className="bg-red-500 text-2xl rounded-md p-1 text-white"
          >
            Clear Cart
          </button>
        )}
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {state.cart.map((item, index) => (
          <li key={index} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                alt=""
                src={item.image}
                className="h-16 w-16 flex-none  bg-gray-50"
              />
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
                <button
                  className="bg-red-500 text-white rounded-md p-0.5 px-2"
                  onClick={() => {
                    dispatch(decrementQuantity(item));
                    dispatch(addCart({ state: store.getState()}));}
                  }
                >
                  -
                </button>
                <div className="bg-gray-500 text-white rounded-md p-0.5 px-2">
                  {item.quantity}
                </div>
                <button
                  className="bg-red-500 text-white rounded-md p-0.5 px-2"
                  onClick={() => {
                    dispatch(incrementQuantity(item));
                    dispatch(addCart({ state: store.getState()}));
                  }}
                >
                  +
                </button>
              </div>
              <div className="mt-1 flex items-center gap-x-1.5 p-1">
                <button
                  className="bg-red-500 text-white rounded-md p-0.5 px-2"
                  onClick={() => {
                    dispatch(removeFromCart(item))
                    dispatch(addCart({ state: store.getState()}));
                  }}
                >
                  ❌
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {state.cart.length > 0 && (
        <div className="container text-center m-auto text-white">
          <h2 className="text-xl font-bold mb-1">Total Amount: {state.total}$ Only</h2>
          <Link
            to={"/order"}
            className="bg-blue-500 text-2xl text-white rounded-md p-1.5 "
          >
            Checkout
          </Link>
        </div>
      )}
      
    </div>
  );
};

export default Cart;
