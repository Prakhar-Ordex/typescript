"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
const Button_1 = __importDefault(require("./Button"));
const Form_1 = __importDefault(require("./components/Form"));
const Context_1 = __importDefault(require("./components/Context"));
const Counter_1 = __importDefault(require("./Provider/Counter"));
function App() {
    const [count, setCount] = (0, react_1.useState)(0);
    return (<>
      <Counter_1.default>
        <Button_1.default text="click me" onClick={() => console.log("first")}/>
        <Form_1.default />
        <Context_1.default />
      </Counter_1.default>
    </>);
}
exports.default = App;
