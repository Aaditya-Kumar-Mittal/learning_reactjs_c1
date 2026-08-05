import React from "react";
import CSBSPassingFunctionPropsA1 from "./CSBSPassingFunctionPropsA1";

function CSBSPassingFunctionProps() {
  function makeAlert(name) {
    alert(name);
  }
  return (
    <div>
      <h1>Passing Function as Props</h1>

      <CSBSPassingFunctionPropsA1 makeAlert={makeAlert} name="John Doe" />
      <CSBSPassingFunctionPropsA1 makeAlert={makeAlert} name="Jane Smith" />
      <CSBSPassingFunctionPropsA1 makeAlert={makeAlert} name="Bob Johnson" />
    </div>
  );
}

export default CSBSPassingFunctionProps;
