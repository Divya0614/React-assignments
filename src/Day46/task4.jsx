import { useEffect, useState } from "react";

export default function Namelogger() {
    const [name, setname] = useState("");

    useEffect(() => {
        console.log("Name Changed:",name);
        
    },[name]);

    return(
        <div>
            <input type="text" placeholder="Enter name" value={name} onChange={(e) => setname(e.target.value)} />
        </div>
    );
}