import { useState } from "react";

export default function UppercaseInput1() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value.toUpperCase());
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here"
      />
      <p>Value: {text}</p>
    </div>
  );
}
