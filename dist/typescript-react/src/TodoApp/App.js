"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AddTodo_1 = __importDefault(require("./components/AddTodo"));
const Todos_1 = __importDefault(require("./store/Todos"));
const Navbar_1 = __importDefault(require("./components/Navbar"));
const Todoslist_1 = __importDefault(require("./components/Todoslist"));
const react_router_dom_1 = require("react-router-dom");
const App = () => {
    return (<div className="bg-gray-800 h-screen text-gray-500 ">
      <react_router_dom_1.BrowserRouter>
        <main>
          <h1>TODO REACT + TYPESCRIPT </h1>
          <Todos_1.default>
            <Navbar_1.default />
            <AddTodo_1.default />
            <Todoslist_1.default />
          </Todos_1.default>
        </main>
      </react_router_dom_1.BrowserRouter>
    </div>);
};
exports.default = App;
