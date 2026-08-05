import React, { useEffect, useState } from "react";
import CSBSHooksC1 from "./CSBSHooksC1";

function CSBSHooksC() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <h1>Life Cycle Events in ReactJs</h1>

      {display && <CSBSHooksC1 counter={0} />}

      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
    </div>
  );
}

export default CSBSHooksC;
