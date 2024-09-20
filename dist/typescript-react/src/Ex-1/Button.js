"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Button = ({ text }) => {
    const [value, setValue] = (0, react_1.useState)(1);
    const [data, setdata] = (0, react_1.useState)({ name: "One", price: 1 });
    return (<div>
      <div>
        {" "}
        <span>
          Book Name:{data.name} and Price:{data.price}{" "}
        </span>
        <button onClick={() => setdata({ name: "two", price: 2 })}>
          change book
        </button>
      </div>
      <button onClick={() => setValue(value + 1)}>
        <span>{value}</span>Button : {text}
      </button>
    </div>);
};
exports.default = Button;
