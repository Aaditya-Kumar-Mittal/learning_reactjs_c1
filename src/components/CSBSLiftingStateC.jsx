import React from "react";

function CSBSLiftingStateC({ users }) {
  return (
    <div>
      <h2>Users</h2>

      {users.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
    </div>
  );
}

export default CSBSLiftingStateC;