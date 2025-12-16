import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Counter</h2>
      <h1>{count}</h1>

      <button onClick={decrease} style={{ marginRight: "10px" }}>
        Decrease
      </button>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}

export default Counter;