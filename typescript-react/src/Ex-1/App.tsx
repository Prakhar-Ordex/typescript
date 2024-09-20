import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Form from "./components/Form";
import Context from "./components/Context";
import Counter from "./Provider/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter>
        <Button text="click me" onClick={() => console.log("first")} />
        <Form />
        <Context />
      </Counter>
    </>
  );
}

export default App;
