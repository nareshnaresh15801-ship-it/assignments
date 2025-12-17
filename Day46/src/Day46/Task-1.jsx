import { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("Rendered!");
  }); 

  return <div>Check the console</div>;
}

export default Example;