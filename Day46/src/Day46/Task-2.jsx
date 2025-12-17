import { useEffect } from "react";

function Example2() {
  useEffect(() => {
    console.log("Component Loaded");
  }, []); 

  return <div>Check the console</div>;
}

export default Example2;