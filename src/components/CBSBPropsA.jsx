import React from "react";
import CBSBPropsB from "./CBSBPropsB";

function CBSBPropsA() {
    const fruitsArray = ["Apple", "Banana", "Cherry"];
    const studentObject = { name: "John", age: 20, grade: "A" };
  return (
    <div>
      CBSBPropsA
      <br />
      <CBSBPropsB name = "Passed from A Component" fruitsArray={fruitsArray} studentObject={studentObject} />
    </div>
  );
}

export default CBSBPropsA;
