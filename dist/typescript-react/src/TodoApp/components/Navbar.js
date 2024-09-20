"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Navbar = () => {
    const [searchParams] = (0, react_router_dom_1.useSearchParams)();
    let todos̥Data = searchParams.get("todos");
    return (<nav>
    <react_router_dom_1.Link to="/" className={todos̥Data === null ? "active" : ""}> All </react_router_dom_1.Link>
    <react_router_dom_1.Link to="/?todos=active" className={todos̥Data === "active" ? "active" : ""}> Active </react_router_dom_1.Link>
    <react_router_dom_1.Link to="/?todos=completed" className={todos̥Data === "completed" ? "active" : ""}> Completed </react_router_dom_1.Link>
   </nav>);
};
exports.default = Navbar;
