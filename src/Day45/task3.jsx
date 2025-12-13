import { useState } from "react";

export default function ControlledCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div style={{ padding: "20px" }}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        Accept Terms
      </label>

      <p>
        {isChecked ? "Checked" : "Not Checked"}
      </p>
    </div>
  );
}
