import { useEffect, useState } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Live Clock</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default LiveClock;
