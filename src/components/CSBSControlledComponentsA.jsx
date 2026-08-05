import React, { useState } from "react";

function CSBSControlledComponentsA() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <h1>Controlled Components A</h1>
      <form action="">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit Button</button>
        <button
          type="reset"
          onClick={() => {
            setName("");
            setPassword("");
            setEmail("");
          }}
        >
          Reset Button
        </button>
      </form>

      <h2>Output</h2>
      <p>Name: {name}</p>
      <p>Password: {password}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default CSBSControlledComponentsA;
