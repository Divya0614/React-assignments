import { useState } from "react";

export default function PasswordMatch() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isMatch =
    password && confirmPassword && password === confirmPassword;

  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <h3>Create Password</h3>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br /><br />

      {confirmPassword && (
        <p style={{ color: isMatch ? "green" : "red" }}>
          {isMatch ? "Passwords match" : "Passwords do not match"}
        </p>
      )}
    </div>
  );
}
