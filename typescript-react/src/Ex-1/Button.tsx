import React, { useState } from "react";

interface buttonprops {
  text: string | number;
  onClick: () => void;
  somthing?: boolean;
}

interface book {
  name: string;
  price: number;
}

const Button: React.FC<buttonprops> = ({ text }) => {
  const [value, setValue] = useState<number>(1);
  const [data, setdata] = useState<book>({ name: "One", price: 1 });
  return (
    <div>
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
    </div>
  );
};

export default Button;
