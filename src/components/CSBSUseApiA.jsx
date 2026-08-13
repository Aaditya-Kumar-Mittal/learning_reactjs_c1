import React, { Suspense, use } from "react";

const fetchUsers = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.json();
};

const userResource = fetchUsers();

const Users = ({ userResource }) => {
  const userData = use(userResource);

  console.log(userData);

  return (
    <div>
      {userData?.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

function CSBSUseApiA() {
  return (
    <div className="m-5">
      <h1>use API in React</h1>

      <br />
      <br />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Users userResource={userResource} />
      </Suspense>
    </div>
  );
}

export default CSBSUseApiA;