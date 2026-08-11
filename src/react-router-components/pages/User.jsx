import React from "react";
import { Link, useParams } from "react-router";

function User() {
  const { id } = useParams();
  return (
    <div className="container bg-warning p-3 mt-5 w-25 rounded text-center">
      <h1>User ID: {id}</h1>
      <br />
      <Link to="/user/users">Back to Users</Link>
    </div>
  );
}

export default User;
