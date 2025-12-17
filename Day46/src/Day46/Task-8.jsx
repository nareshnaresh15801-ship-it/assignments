import { useEffect, useState } from "react";

function SearchUsers() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const controller = new AbortController();

    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.github.com/search/users?q=${query}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        setResults(data.items || []);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      }
    }

    fetchData();

    // cleanup previous request
    return () => controller.abort();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {results.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchUsers;
