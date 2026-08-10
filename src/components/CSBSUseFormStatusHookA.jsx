import React from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-success" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

function CSBSUseFormStatusHookA() {
  const handleSubmit = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log("Form submitted!");
        resolve();
      }, 2000);
    });
  };

  return (
    <div className="container my-5 p-5 border border-dark rounded">
      <h1>Use Form Status Hook A</h1>
      <p className="lead text-muted">
        This is a simple implementation of a form status hook. It allows you to
        manage the status of a form, such as whether it is submitting, has been
        submitted, or has errors.
      </p>
      <br />
      <div>
        <form action={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>
          <br />
          <div className="checkbox">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <br />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}

export default CSBSUseFormStatusHookA;