import React from "react";

function CSBSLiftingStateB({ setUser, addUser }) {
  return (
    <div>
      <h2>Add User</h2>

      <input
        type="text"
        placeholder="Enter a user name"
        onChange={(event) => setUser(event.target.value)}
      />

      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default CSBSLiftingStateB;