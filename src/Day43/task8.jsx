import { useState } from "react";

export default function Counterset() {
    const [count, setcount] = useState(0);

    const increment = () => {
        setcount(count + 1)
    };

    const decrement = () => {
        setcount(count - 1)

    };
    const reset = () => {
        setcount(0)
    };


    return (
        <div>
            <h2>Counter: {count}</h2>

            <button onClick={increment} style={{ marginRight: "0px" }}>increment</button>
            <button onClick={decrement} style={{ marginRight: "0px" }}>decrement</button>
            <button onClick={reset} style={{ marginRight: "0px" }}>Reset</button>
        </div>
    );
}