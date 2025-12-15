import { useEffect, useState } from "react";

export default function Titleupdate() {
    const [count, setcount] = useState(0);

    useEffect(() => {
        document.title = count;

    },[count]);

    return (
        <div>
            <p>count:{count}</p>
            <button onClick={() => setcount(count+1)}>Increase</button>
        </div>
    );

}