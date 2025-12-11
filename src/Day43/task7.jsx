import { useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>Theme Switcher</h2>
      <p>Current Theme: {theme}</p>

      <button
        onClick={toggleTheme}
        style={{ border: "1px solid black", padding: "5px" }}
      >
        Switch
      </button>
    </div>
  );
}
