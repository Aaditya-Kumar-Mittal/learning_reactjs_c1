import React, { useId } from "react";

function CSBSUseIDHookA() {
  return (
    <div>
      <h1>Use ID Hook in ReactJs</h1>
      <br />
      <br />
      <FormA />
      <br />
      <br />
      <FormB />
    </div>
  );
}

function FormA() {
  const name = useId();
  const age = useId();
  const skills = useId();
  const terms = useId();

  return (
    <div>
      <form action="">
        <label htmlFor={name}>Name</label>
        <input type="text" id={name} />
        <br />
        <label htmlFor={age}>Age</label>
        <input type="number" id={age} />
        <br />
        <label htmlFor={skills}>Skills</label>
        <input type="text" id={skills} />
        <br />
        <label htmlFor={terms}>Terms and Conditions</label>
        <input type="checkbox" id={terms} />
        <br />
      </form>
    </div>
  );
}

function FormB() {
  const name = useId();
  const age = useId();
  const skills = useId();
  const terms = useId();

  return (
    <div>
      <form action="">
        <label htmlFor={name}>Name</label>
        <input type="text" id={name} />
        <br />
        <label htmlFor={age}>Age</label>
        <input type="number" id={age} />
        <br />
        <label htmlFor={skills}>Skills</label>
        <input type="text" id={skills} />
        <br />
        <label htmlFor={terms}>Terms and Conditions</label>
        <input type="checkbox" id={terms} />
        <br />
      </form>
    </div>
  );
}

export default CSBSUseIDHookA;
