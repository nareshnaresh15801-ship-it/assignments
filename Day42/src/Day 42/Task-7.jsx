import { useState } from "react";

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: isDark ? "#121212" : "#ffffff",
        color: isDark ? "#ffffff" : "#000000",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.3s ease"
      }}
    >
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>

      <button
        onClick={() => setIsDark(prev => !prev)}
        style={{
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Switch Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;