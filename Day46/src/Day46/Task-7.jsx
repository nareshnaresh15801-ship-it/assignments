import { useEffect, useState } from "react";

function GitHubUser({ username }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUser() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error("User not found");
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      }
    }

    fetchUser();

    // cleanup on unmount
    return () => controller.abort();
  }, [username]);

  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <img
        src={user.avatar_url}
        alt={user.name}
        width="100"
        style={{ borderRadius: "50%" }}
      />
      <h2>{user.name || user.login}</h2>
    </div>
  );
}

export default GitHubUser;
