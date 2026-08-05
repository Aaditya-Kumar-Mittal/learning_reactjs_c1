import React from "react";

function CBSBPropsB({ name, fruitsArray, studentObject }) {
  return (
    <div>
      CBSBPropsB - {name}
      <br />
      Fruits: {fruitsArray.join(", ")}
      <br />
      Student: {studentObject.name}, Age: {studentObject.age}, Grade: {studentObject.grade}
    </div>
  );
}

export default CBSBPropsB;
