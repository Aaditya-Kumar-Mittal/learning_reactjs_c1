import React, { useState, useTransition } from "react";

function CSBSUseTransitionHookA() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  const handleSubmit = () => {
    startTransition(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      setCount((prev) => prev + 1);
    });
  };

  return (
    <div>
      <h1>useTransition Hook</h1>

      <h2>Count: {count}</h2>

      {isPending && <h3>Updating...</h3>}

      <button onClick={handleSubmit} disabled={isPending}>
        {isPending ? "Pending..." : "Start Transition"}
      </button>
    </div>
  );
}

export default CSBSUseTransitionHookA;