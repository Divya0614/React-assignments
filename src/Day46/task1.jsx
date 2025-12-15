import { useEffect, useState } from "react";

export default function Renderlog() {
    const [count, setcount] = useState(0);

    useEffect(() => {
        console.log("Rendered!");
        
    });

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setcount(count + 1)}>Increase</button>
        </div>
    );

}