import { useState, useEffect } from "react";

export default function GitHubUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/octocat")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []); 

  return (
    <div>
      {user && (
        <>
          <h3>{user.name}</h3>
          <img src={user.avatar_url} alt="Avatar" width="100" />
        </>
      )}
    </div>
  );
}
