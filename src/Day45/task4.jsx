import { useState } from "react";

export default function CountryDropdown() {
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <label>
        Select Country:{" "}
        <select value={country} onChange={handleChange}>
          <option value="">--Choose--</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
        </select>
      </label>

      <p>
        {country ? `Selected Country: ${country}` : "No country selected"}
      </p>
    </div>
  );
}
