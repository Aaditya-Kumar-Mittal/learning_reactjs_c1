import React from "react";
import CSBSContextAPIB from "./CSBSContextAPIB";
import { ContextData } from "./CSBSContextAPIContextData";

function CSBSContextAPIA() {
    const [contextValue, setContextValue] = React.useState("Context API Default Value");
  return (
    <>
      <ContextData.Provider value={contextValue}>
        <div style={{ backgroundColor: "yellow", padding: "100px" }}>
          <h1>Context API A</h1>
          <br /><br />
          <select name="itemv" id="itemv" onChange={(e) => setContextValue(e.target.value)}>
            <option value="Value 1">Value 1</option>
            <option value="Value 2">Value 2</option>
            <option value="Value 3">Value 3</option>
            <option value="Value 4">Value 4</option>
            <option value="Value 5">Value 5</option>
          </select>
          <CSBSContextAPIB />
        </div>
      </ContextData.Provider>
    </>
  );
}

export default CSBSContextAPIA;
