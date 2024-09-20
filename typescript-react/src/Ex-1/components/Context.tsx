import React, { useContext } from "react";
import { CounterContext } from "../Provider/Counter";

const Context: React.FC = () => {
  const context = useContext(CounterContext);
  return (
    <>
      <h1>Context use </h1>
      <div>{context?.value}</div>
      <button onClick={() => context?.setCount((prev: number) => prev + 1)}>
        add
      </button>
    </>
  );
};

export default Context;
