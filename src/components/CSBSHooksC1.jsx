import React, { useEffect, useState } from "react";

function CSBSHooksC1({ counter }) {
  const [count, setCount] = useState(counter);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    console.log("Component Updated");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("Component Unmounted!");
    };
  }, []);

  return (
    <div>
      <h1>Life Cycle Events in ReactJs</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CSBSHooksC1;
