import { useState } from "react";

function ColorButton() {
  const [color, setColor] = useState("blue");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button
        onClick={() => setColor(color === "blue" ? "green" : "blue")}
        style={{
          backgroundColor: color,
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default ColorButton;