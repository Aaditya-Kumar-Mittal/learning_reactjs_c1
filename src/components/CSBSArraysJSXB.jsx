import React from "react";
import CSBSArraysJSXBChildA from "./CSBSArraysJSXBChildA";

function CSBSArraysJSXB() {
  const userData = [
    { name: "John", age: 25, city: "New York", rollNo: 101 },
    { name: "Jane", age: 30, city: "Los Angeles", rollNo: 102 },
    { name: "Mike", age: 35, city: "Chicago", rollNo: 103 },
    { name: "Emily", age: 28, city: "Houston", rollNo: 104 },
    { name: "David", age: 32, city: "Phoenix", rollNo: 105 },
  ];

  return (
    <div>
      <h1>CSBSArraysJSXB</h1>
      {userData.map((user, index) => (
        <CSBSArraysJSXBChildA key={index} user={user} color="lightblue" borderColor="darkblue" />
      ))}
    </div>
  );
}

export default CSBSArraysJSXB;
