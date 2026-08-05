import React from "react";

function CSBSUpdatingObjectsA() {
  const userData = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA",
    },
  };

  const [name, setName] = React.useState(userData.name);
  const [address, setAddress] = React.useState(userData.address);

  return (
    <div>
      <h1>Updating Objects</h1>

      <h1>Name: {name}</h1>

      <h1>Age: {userData.age}</h1>

      <h1>
        Address: {address.street}, {address.city}, {address.country}
      </h1>

        <br />
      <input
        type="text"
        placeholder="Enter your name to change"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <input type="text" 
        placeholder="Enter the city to change"
        value={address.city}
        onChange={(e) => setAddress({ ...address, city: e.target.value })}
      />
    </div>
  );
}

export default CSBSUpdatingObjectsA;
