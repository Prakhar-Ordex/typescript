"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const isAuthenticated = () => {
    const loginUser = localStorage.getItem("loginUser");
    return loginUser !== null; // Returns true if user is logged in, false otherwise
};
exports.isAuthenticated = isAuthenticated;
