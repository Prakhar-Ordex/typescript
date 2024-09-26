"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const ProductSlice_1 = __importDefault(require("./ProductSlice"));
const UserSlice_1 = __importDefault(require("./UserSlice"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        productsData: ProductSlice_1.default,
        userData: UserSlice_1.default
    }
});
