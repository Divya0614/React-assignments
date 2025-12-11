import { useState } from "react";
function TextInput() {
    const [Text,setText] = useState("");
    return(
        <div>
            <input type="text" value={Text} onChange={(e) => setText(e.target.value)} />
            <p>You typed:{Text}</p>
        </div>
    );
}
export default TextInput;