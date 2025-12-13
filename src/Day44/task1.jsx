import { useState } from "react";

export default function Userstatus() {
     const[isloggedIn, setisloggedIn] = useState(false);

     return(
        <div style={{fontSize:"20px", padding :"20px"}}>
            <h2>User status : {isloggedIn ? "LoggedIn" : "Guest"}</h2>

            <button onClick={() => setisloggedIn(!isloggedIn)}>
                {isloggedIn ? "Logout" : "Login"}
            </button>
        </div>
     );
}