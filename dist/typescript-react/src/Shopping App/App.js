"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = __importDefault(require("./Components/Navbar"));
const Product_1 = __importDefault(require("./Pages/Product"));
const react_redux_1 = require("react-redux");
const store_1 = require("./Redux/store");
const Login_1 = __importDefault(require("./Pages/Login"));
const Register_1 = __importDefault(require("./Pages/Register"));
const Cart_1 = __importDefault(require("./Pages/Cart"));
const ProtectRoute_1 = __importDefault(require("./Auth/ProtectRoute"));
const Profile_1 = __importDefault(require("./Pages/Profile"));
const EditProfile_1 = __importDefault(require("./Pages/EditProfile"));
const App = () => {
    return (<react_redux_1.Provider store={store_1.store}>
      <react_router_dom_1.BrowserRouter>
        <Navbar_1.default />
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route element={<ProtectRoute_1.default />}>
            <react_router_dom_1.Route path="/" element={<Product_1.default />}/>
            <react_router_dom_1.Route path="/cart" element={<Cart_1.default />}/>
            <react_router_dom_1.Route path="/profile" element={<Profile_1.default />}/>
            <react_router_dom_1.Route path="/edit/:id" element={<EditProfile_1.default />}/>
          </react_router_dom_1.Route>
          <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
          <react_router_dom_1.Route path="/register" element={<Register_1.default />}/>
        </react_router_dom_1.Routes>
      </react_router_dom_1.BrowserRouter>
    </react_redux_1.Provider>);
};
exports.default = App;
