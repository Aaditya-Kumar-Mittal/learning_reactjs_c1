import React, { useState } from "react";

function CSBSUpdatingObjectsB() {
  const [dummyData, setDummyData] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
    },
  });

  const handleNameChange = (event) => {
    setDummyData({
      ...dummyData,
      firstName: event.target.value,
    });
  };

  const handleCityChange = (event) => {
    setDummyData({
      ...dummyData,
      address: {
        ...dummyData.address,
        city: event.target.value,
      },
    });
  };

  return (
    <div>
      <h1>Updating Objects in ReactJS</h1>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter the first name"
        onChange={handleNameChange}
      />
      <br />
      <button>Update First Name</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter the city name"
        onChange={handleCityChange}
      />
      <br />
      <button>Update City</button>
      <br />
      <h2>Dummy Data:</h2>
      <p>First Name: {dummyData.firstName}</p>
      <p>Last Name: {dummyData.lastName}</p>
      <p>Age: {dummyData.age}</p>
      <p>Address:</p>
      <p>Street: {dummyData.address.street}</p>
      <p>City: {dummyData.address.city}</p>
      <p>State: {dummyData.address.state}</p>
    </div>
  );
}

export default CSBSUpdatingObjectsB;
