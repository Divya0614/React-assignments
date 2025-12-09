import { useState } from "react";

export default function App() {
  const [agree, setAgree] = useState(false);

  const handleChange = () => {
    setAgree(!agree);
  };

  return (
    <div>
      <h2>Checkbox</h2>

      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={handleChange}
        />
        Please click the check box
      </label>

      <p>Status: {agree ? "Checked" : "Not Checked"}</p>
    </div>
  );
}
