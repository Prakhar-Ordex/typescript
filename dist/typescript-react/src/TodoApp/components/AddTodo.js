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
require("./App.css");
const Todos_1 = require("../store/Todos");
const AddTodo = () => {
    const [todo, setTodo] = (0, react_1.useState)("");
    const { handleAddTodo } = (0, Todos_1.useTodo)();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.trim().length) {
            console.error("Todo is empty");
            setTodo("");
            return; // Stop form submission if todo is empty
        }
        handleAddTodo(todo);
        setTodo("");
    };
    return (<form onSubmit={handleSubmit}>
      <input className="input" type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
      <button type="submit">Add Todo</button>
    </form>);
};
exports.default = AddTodo;
