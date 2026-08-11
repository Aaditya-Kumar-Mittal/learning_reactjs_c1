import React, { useContext } from 'react'
import { SubjectList } from './CBSContextFileData';

function CBSContextStudent() {

    const subjects = useContext(SubjectList);

  return (
    <div className="container-fluid w-100 m-6 p-4 border border-2 border-dark p-3 mt-3 bg-dark rounded shadow">
        <h1>Student Component</h1>
        <h2>Subjects List</h2>
        <ul>
            {subjects.map((subject, index) => (
                <li key={index}>{subject}</li>
            ))}
        </ul>
    </div>

  )
}

export default CBSContextStudent