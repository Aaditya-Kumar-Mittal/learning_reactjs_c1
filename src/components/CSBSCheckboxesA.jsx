import React, { useState } from "react";

function CSBSCheckboxesA() {
  const [skills, setSkills] = useState([]);
  const handleSkills = (e) => {
    // console.log(e.target);
    const { name, checked } = e.target;
    if (checked) {
      setSkills([...skills, name]);
    } else {
      setSkills(skills.filter((skill) => skill !== name));
    }
  };
  return (
    <div>
      <h1>Handling Checkboxes in ReactJS</h1>
      <input type="checkbox" name="PHP" id="php" onChange={handleSkills} />
      <label htmlFor="php">PHP</label>
      <br />
      <input type="checkbox" name="JavaScript" id="js" onChange={handleSkills} />
      <label htmlFor="js">JavaScript</label>
      <br />
      <input type="checkbox" name="Python" id="python" onChange={handleSkills} />
      <label htmlFor="python">Python</label>
      <br />
      <input type="checkbox" name="Java" id="java" onChange={handleSkills} />
      <label htmlFor="java">Java</label>

      <br />
      <br />
      <br />

      <h1>Skills = {skills.join(", ")}</h1>
    </div>
  );
}

export default CSBSCheckboxesA;
