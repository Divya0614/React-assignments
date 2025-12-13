import { useState } from "react";
export default function Premiumfeature() {
    const [ispremiumuser, setispremiumuser] = useState(true);

    return(
        <div style={{padding:"20px"}}>
            <h2>User type : {ispremiumuser ? "Premium" : "Normal"}</h2>

            {ispremiumuser && (
              <button>Access premium feature</button>
            )}
            
        </div>
    )
}