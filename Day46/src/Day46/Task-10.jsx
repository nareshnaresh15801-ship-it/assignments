import { useEffect, useState } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    // read initial value from localStorage
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // save theme whenever it changes
    localStorage.setItem("theme", theme);

    // apply theme to document (optional but common)
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <h2>Current theme: {theme}</h2>

      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}

export default ThemeSwitcher;
