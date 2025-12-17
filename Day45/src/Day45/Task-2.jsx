import { useState } from "react";

function UppercaseInput() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value.toUpperCase());
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="UPPERCASE ONLY"
    />
  );
}

export default UppercaseInput;