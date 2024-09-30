import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import Product from "./Pages/Product";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import ProtectRoute from "./Auth/ProtectRoute";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<ProtectRoute />}>
            <Route path="/" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit/:id" element={<EditProfile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  );
};

export default App;
