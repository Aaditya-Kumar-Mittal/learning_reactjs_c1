import React from 'react'
import CBSContextClass from './CBSContextClass'

function CBSContextBlock() {
  return (
    <div className="container-fluid w-100 m-6 p-4 border border-2 border-light p-3 mt-3 bg-danger rounded shadow">
      <h1>Block Component</h1>
      <CBSContextClass/>    
    </div>
  )
}

export default CBSContextBlock