import { useEffect } from "react";

export default function Loadonce() {
    useEffect(() => {
        console.log("Component Loaded");
        
    }, []);

    return <h3>Check the console</h3>
}