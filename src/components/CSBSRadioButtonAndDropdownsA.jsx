import React from "react";
import { useState } from "react";

function CSBSRadioButtonAndDropdownsA() {
  const [gender, setGender] = useState("");
  const [fruit, setFruit] = useState("");

  return (
    <div>
      <h1>Handling Radio Buttons and Dropdown in ReactJS</h1>
      <br />
      <br />
      <input type="radio" name="gender" id="male" onChange={(e)=>setGender(e.target.value)} value={"male"} />
      <label htmlFor="male">Male</label>
      <br />
      <input type="radio" name="gender" id="female" onChange={(e)=>setGender(e.target.value)} value={"female"} />
      <label htmlFor="female">Female</label>
      <br />
      <br />
      <h1>Gender = {gender}</h1>
        <br />
      <br />

      <h2>Dropdown</h2>
      <select name="fruits" id="fruits" onChange={(e)=>setFruit(e.target.value)}>
        <option value="">Select Fruit</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <h1>Fruit = {fruit}</h1>
    </div>
  );
}

export default CSBSRadioButtonAndDropdownsA;
