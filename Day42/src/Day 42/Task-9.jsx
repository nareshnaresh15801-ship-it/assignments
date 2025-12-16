import { useState } from "react";

function DropdownMenu() {
  const [selected, setSelected] = useState(""); 

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Choose an option:</h2>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      >
        <option value="">-- Select --</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>

      {selected && <p style={{ marginTop: "20px" }}>You selected: {selected}</p>}
    </div>
  );
}

export default DropdownMenu;