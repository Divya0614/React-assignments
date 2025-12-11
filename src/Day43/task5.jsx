import { useState } from "react"

export default  function Colorchange() {
    const[bg, setbg] = useState("black");

    const changebackground = () => {
        setbg(bg === "black" ? "yellow" : "red");
    };

    return(
        <div style={{backgroundColor : bg}}>
            <button onClick={changebackground}>change background</button>
        </div>
    );
}