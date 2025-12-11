import { useState } from "react";

function Counter(){
    const [count, setcount] = useState(0);
    return(
        <div style={{
            textAlign:"center",
            margin:"20px"
        }}>
            <h2>count: {count}</h2>
            <button onClick={() => setcount(count + 1)}>Increase</button>
            <button onClick={() => setcount(count-1)} style={{marginLeft:"10px"}}>Decrease</button>
        </div>
    );
}
export default Counter;