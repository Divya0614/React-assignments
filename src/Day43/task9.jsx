import { useState } from "react";

export default function Dropdown(){
    const[selectoption, setselectoption] = useState("");

    const handlechange = () => {
        setselectoption(e.target.value);
    };

    return(
        <div>
            <h2>Dropdown</h2>
            <select value={selectoption} onChange={handlechange}>
                <option value="">Select State</option>
                <option value="option1">TamilNadu</option>
                <option value="option2">AndhraPradesh</option>
                <option value="option3">Kerala</option>
            </select>
            <p>Selected option:{setselectoption}</p>
        </div>
    );
}