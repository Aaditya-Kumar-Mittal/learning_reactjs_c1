import React, { useEffect, useState } from "react";

function CSBSHooksA() {
  function callOnce() {
    console.log("This function is called only once");
  }

  const [count, setCount] = useState(0);

  // callOnce();

  useEffect(() => {
    callOnce();
  }, [count]);

  return (
    <div>
      <h1>useEffect Hook in ReactJS</h1>

      <br />
      <br />
      <h1>Counter : {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default CSBSHooksA;
