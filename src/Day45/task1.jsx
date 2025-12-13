import { useState } from "react";

export default function HelloInput() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>
        {name ? `Hello, ${name}` : "Hello"}
      </p>
    </div>
  );
}
