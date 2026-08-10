import React, { useState } from "react";
import CSBSLiftingStateB from "./CSBSLiftingStateB";
import CSBSLiftingStateC from "./CSBSLiftingStateC";

function CSBSLiftingStateA() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  return (
    <div>
      <h1>Lifting State in ReactJS</h1>

      <br />
      <CSBSLiftingStateB
        setUser={setUser}
        addUser={() => setUsers([...users, user])}
      />

      <br />

      <CSBSLiftingStateC users={users} />
    </div>
  );
}

export default CSBSLiftingStateA;
