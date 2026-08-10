import React, { useState } from "react";

function CSBSDerivedStateA() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const totalUsers = users.length;
  const lastUser = users[users.length - 1];
  const uniqueUsers = [...new Set(users)].length;

  function handleAddUsers(event) {
    setUsers([...users, user]);
    console.log(users);
  }

  return (
    <div>
      <h1>Derived State in ReactJS</h1>
      <h1>Total Users : {totalUsers}</h1>
      <h1>Last User : {lastUser}</h1>
      <h1>Unique Users : {uniqueUsers}</h1>
      <input
        type="text"
        placeholder="Add New User"
        onChange={(event) => setUser(event.target.value)}
      />
      <button onClick={handleAddUsers}>Add User</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default CSBSDerivedStateA;
