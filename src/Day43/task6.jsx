import { useState } from "react";

export default function Loginform() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handlelogin = () => {
        console.log("Email:",email);
        console.log("Password:",password);
        alert("Login button clicked");
        
        
    };

    return(
        <div>
            <h2>Loginform</h2>
            <input type="email"
            placeholder="Enter your email"
            onChange={(e) => setemail(e.target.value)}
             />
             <br /><br />
             <input type="password"
             placeholder="Enter your password"
             onChange={(e) => setpassword(e.target.value)}
              />

              <br /><br />

              <button onClick={handlelogin}  style={{ border: "1px solid black", padding: "5px" }}>Login</button>
        </div>
    );
}