import React, { useState } from "react";

function CBSBInputA() {
  const [value, setValue] = useState("Aaditya Kumar Mittal");

  return (
    <div>
      <h1>Get the value of the input field</h1>

      <input
        type="text"
        placeholder="Enter text here"
        onChange={() => setValue(event.target.value)}
        value={value}
      />

      <h1>Value: {value}</h1>

      <button onClick={() => setValue("")}>Clear</button>
    </div>
  );
}

export default CBSBInputA;
