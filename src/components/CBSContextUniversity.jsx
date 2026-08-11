import React from "react";
import CBSContextCollege from "./CBSContextCollege";
import { SubjectList } from "./CBSContextFileData";

function CBSContextUniversity() {
  const subjects = [
    "Math",
    "Science",
    "English",
    "History",
    "Geography",
  ];

  return (
    <div className="container w-100 m-6 p-4 border border-2 border-dark p-3 mt-3 bg-warning rounded shadow">
      <h1>University Component</h1>

      <SubjectList.Provider value={subjects}>
        <CBSContextCollege />
      </SubjectList.Provider>
    </div>
  );
}

export default CBSContextUniversity;