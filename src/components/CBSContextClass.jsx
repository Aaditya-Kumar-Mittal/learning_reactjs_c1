import React from 'react'
import CBSContextStudent from './CBSContextStudent'

function CBSContextClass() {
  return (
    <div className="container-fluid w-100 m-6 p-4 border border-2 border-light p-3 mt-3 bg-info rounded shadow">
        <h1>Class Component</h1>
        <CBSContextStudent/>
    </div>
  )
}

export default CBSContextClass