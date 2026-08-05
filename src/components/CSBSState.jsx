import React, { useState } from "react";

function CSBSState() {
  const [fruit, setFruit] = useState("Apple");
  return (
    <>
      Fruit : {fruit}
      <button onClick={() => setFruit("Banana")}>Change Fruit</button>
    </>
  );
}

export default CSBSState;
