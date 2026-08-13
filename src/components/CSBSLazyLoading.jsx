import React, { lazy, Suspense, useState } from "react";
// import CSBSLazyLoadingUser from "./CSBSLazyLoadingUser";
const CSBSLazyLoadingUser = lazy(() => import("./CSBSLazyLoadingUser"));

function CSBSLazyLoading() {
  const [load, setLoad] = useState(false);
  return (
    <div className="m-5">
      <h1>Lazy Loading in ReactJS</h1>
      <br />
      <br />
      {load && (
        <Suspense fallback={<div>Loading...</div>}>
          <CSBSLazyLoadingUser />
        </Suspense>
      )}
      <button className="p-2 border rounded" onClick={() => setLoad(true)}>
        Load User Component
      </button>
    </div>
  );
}

export default CSBSLazyLoading;
