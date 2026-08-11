import React, { useState } from "react";

function CSBSUpdatingArrayA() {
  const [fruits, setFruits] = useState(["Apples", "Mangoes", "Grapes"]);

  const [fruit, setFruit] = useState("");

  const [userDetails, setUserDetails] = useState([
    {
      id: 101,
      name: "John",
      age: 25,
      city: "New York",
    },
    {
      id: 102,
      name: "Alice",
      age: 30,
      city: "Los Angeles",
    },
    {
      id: 103,
      name: "Bob",
      age: 28,
      city: "Chicago",
    },
  ]);

  const handleFruitAddition = () => {
    setFruits([...fruits, fruit]);
  };

  const handleAgeUpdate = (id) => {
    const updatedUserDetails = userDetails.map((user) => {
      if (user.id === id) {
        return { ...user, age: user.age + 1 };
      }
      return user;
    });
    setUserDetails(updatedUserDetails);
  };

  return (
    <div>
      <h1>Updating Array in ReactJS</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <br />
      <input
        type="text"
        placeholder="Enter fruit name"
        onChange={(event) => setFruit(event.target.value)}
      />
      <button onClick={handleFruitAddition}>Add New Fruit</button>

      <br />
      <br />

      <h1>User Details</h1>

      {userDetails.map((user, index) => (
        <div key={index}>
          Name: {user.name}, Age: {user.age}, City: {user.city}
          <br />
          <br />
          <button onClick={() => handleAgeUpdate(user.id)}>Increase Age</button>
          <br />
        </div>
      ))}
      <br />
      <br />
    </div>
  );
}

export default CSBSUpdatingArrayA;