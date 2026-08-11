import React, { useActionState } from "react";

function CSBSUseActionStateHookA() {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if(name === "admin" && password === "admin") {
      return { success: true, message: "Login successful!" };
    }
    return { success: false, message: "Invalid credentials!" };
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);

  return (
    <div>
      <h1>Use Action State Hook in ReactJs</h1>
      <br />
      <form action={action}>
        <input type="text" placeholder="Enter some name" name="name" />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter some password"
          name="password"
        />
        <br />
        <br />
        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
        <br />
        <br />
        <div>
          {data && <p>{data.message}</p>}
        </div>
      </form>
    </div>
  );
}

export default CSBSUseActionStateHookA;
