import React from 'react'

function CSBSPassingFunctionPropsA1({ makeAlert, name }) {
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => makeAlert(name)}>Show Alert</button>
    </div>
  )
}

export default CSBSPassingFunctionPropsA1