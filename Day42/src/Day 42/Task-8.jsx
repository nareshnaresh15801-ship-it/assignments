import { useState } from "react";

function Counter02() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Counter</h2>
      <h1>{count}</h1>

      <button onClick={() => setCount(prev => prev - 1)}>
        Decrease
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ margin: "0 10px" }}
      >
        Reset
      </button>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter02;