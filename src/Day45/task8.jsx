import { useState } from "react";

export default function ProfileUpdateForm() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Profile Update</h2>

      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={profile.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={profile.age}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={profile.phone}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profile.email}
          onChange={handleChange}
        />
      </form>

      <h3>Live Preview</h3>
      <p><strong>Name:</strong> {profile.name || "-"}</p>
      <p><strong>Age:</strong> {profile.age || "-"}</p>
      <p><strong>Phone:</strong> {profile.phone || "-"}</p>
      <p><strong>Email:</strong> {profile.email || "-"}</p>
    </div>
  );
}
