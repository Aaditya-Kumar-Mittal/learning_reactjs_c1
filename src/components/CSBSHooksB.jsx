import React, { useState } from "react";
import CSBSHooksB1 from "./CSBSHooksB1";

function CSBSHooksB() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Handle Props Side Effect with useEffect in component</h1>
      <CSBSHooksB1 counter={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CSBSHooksB;
