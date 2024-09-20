import React, { createContext, useState } from "react";
interface counterProvider {
    children: React.ReactNode;
}
interface counterValue {
    value: number;
    setCount : React.Dispatch<React.SetStateAction<number>>;    
}
export const CounterContext = createContext<counterValue | null>(null);

const Counter:React.FC<counterProvider> = (props) => {
    const [count,setCount] = useState<number>(1)
    return <CounterContext.Provider value={{
        value: count,
        setCount: setCount,

    }}>{ props.children}</CounterContext.Provider>;
};

export default Counter;
