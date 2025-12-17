import { useState } from "react";

function Logged() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  return (
    <div>
      <h1>{isLoggedIn ? "Logged In" : "Guest"}</h1>
     
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>
    </div>
  );
}

export default Logged;