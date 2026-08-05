import React from "react";

function CBSBPropStylingB({ children, color }) {
  return (
    <div style={{ color: color, border: "1px solid black" }}>{children}</div>
  );
}

export default CBSBPropStylingB;
