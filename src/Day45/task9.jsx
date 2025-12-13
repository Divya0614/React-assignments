import { useState } from "react";

export default function ShortValidatedForm() {
  const [data, setData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.email) return setError("All fields required!");
    setError(""); 
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
