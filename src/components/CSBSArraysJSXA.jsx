import React from "react";

function CSBSArraysJSXA() {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
  const vegetables = ["Carrot", "Broccoli", "Spinach", "Potato", "Tomato"];
  const deserts = ["Ice Cream", "Cake", "Cookies", "Brownies", "Pudding"];
  const bakedGoods = ["Bread", "Muffins", "Croissants", "Bagels", "Donuts"];

  const userData = [
    { name: "John", age: 25, city: "New York" },
    { name: "Jane", age: 30, city: "Los Angeles" },
    { name: "Mike", age: 35, city: "Chicago" },
    { name: "Emily", age: 28, city: "Houston" },
    { name: "David", age: 32, city: "Phoenix" },
  ];

  return (
    <div>
      <h1>Loops in ReactJS</h1>
      <br />
      <h2>Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <br />
      <h2>Vegetables</h2>
      <ul>
        {vegetables.map((vegetable, index) => (
          <li key={index}>{vegetable}</li>
        ))}
      </ul>
      <br />
      <h2>Deserts</h2>
      <ul>
        {deserts.map((desert, index) => (
          <li key={index}>{desert}</li>
        ))}
      </ul>
      <br />
      <h2>Baked Goods</h2>
      <ul>
        {bakedGoods.map((good, index) => (
          <li key={index}>{good}</li>
        ))}
      </ul>
      <br />
      <h2>User Data</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default CSBSArraysJSXA;
