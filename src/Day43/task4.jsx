import { useState } from "react";

export default function Evenorodd(){
    const [num, setNum] = useState("");
    const [ bgcolor, setbgcolor] = useState("white");

    const checkEvenodd = () => {
        if (num === "") return ("");
        return num % 2 === 0 ? "Even" : "Odd";
    };

    const changecolor = () => {
        setbgcolor(bgcolor === "white" ? "blue" : "red");
    };

    return (
        <div style={{ backgroundcolor: bgcolor}}>
            <h2>Combined component</h2>

            <input type="number"
            value={num}
            onChange={(e) => setNum(e.target.value)} />

            <p>{checkEvenodd()}</p>
            <button onClick={changecolor}>change background</button>
        </div>
    );
}