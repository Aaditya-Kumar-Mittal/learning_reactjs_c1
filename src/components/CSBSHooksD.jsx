import React, { useRef } from "react";

function CSBSHooksD() {
  const inputRef = useRef(null);

  const transferRef = () => {
    inputRef.current.focus();
    inputRef.current.placeholder = "useRef Hook Demo";
  };
  return (
    <div>
      <h1>useRef Hook in ReactJS</h1>

      <input type="text" ref={inputRef} />

      <button onClick={transferRef}>useRef Hook Demo</button>
    </div>
  );
}

export default CSBSHooksD;
