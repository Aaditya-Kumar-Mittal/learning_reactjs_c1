import React from "react";
import { Link } from "react-router";

function Users() {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
    { id: 5, name: "Charlie Davis" },
    { id: 6, name: "Emily Wilson" },
    { id: 7, name: "Frank Miller" },
    { id: 8, name: "Grace Lee" },
    { id: 9, name: "Henry Clark" },
    { id: 10, name: "Isabella Martinez" },
  ];

  return (
    <div className="container bg-warning p-3 mt-5 w-25 rounded text-center">
      <h1>Users</h1>
      {users.map((user) => (
        <h4 key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </h4>
      ))}
    </div>
  );
}

export default Users;
