import React from "react";

function UserComponent() {
  return <div>User Component</div>;
}

// This is a named export. You can have multiple named exports in a file.
export function UserComponent2() {
  return <div>User Component 2</div>;
}

export function UserComponent3() {
  return <div>User Component 3</div>;
}

// A file can have a single default export. You can have multiple named exports, but only one default export per file.
export default UserComponent;


// This is export constant.
export const UserComponentKey = "User Component Key";