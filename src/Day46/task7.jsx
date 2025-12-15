import { useState, useEffect } from "react";

export default function SearchUser() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (search === "") return;

    fetch(`https://api.github.com/users/${search}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub username"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {user && (
        <>
          <h3>{user.name}</h3>
          <img src={user.avatar_url} alt="Avatar" width="100" />
        </>
      )}
    </div>
  );
}
