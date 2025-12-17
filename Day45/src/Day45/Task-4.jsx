import { useState } from "react";

function CountrySelect() {
  const [country, setCountry] = useState("");

  return (
    <div>
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="" disabled>
          Select a country
        </option>
        <option value="USA">United States</option>
        <option value="CAN">Canada</option>
        <option value="UK">United Kingdom</option>
        <option value="AUS">Australia</option>
        <option value="IND">India</option>
      </select>

      <p>Selected country: {country || "None"}</p>
    </div>
  );
}

export default CountrySelect;