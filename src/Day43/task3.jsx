import { useState } from "react";

function Togglebutton(){
    const [ isOn, setisOn]=useState(true);
    return(
        <button onClick={() => setisOn(!isOn)}>
            {isOn ? "ON":"OFF"}
        </button>
    );
}
export default Togglebutton;