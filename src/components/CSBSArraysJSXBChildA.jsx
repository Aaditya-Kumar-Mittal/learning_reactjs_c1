import React from 'react'

function CSBSArraysJSXBChildA({user, color, borderColor}) {
  return (
    <div style={{ backgroundColor: color, border: `2px solid ${borderColor}`, padding: '10px', margin: '10px', borderRadius: '20px' }}>
        <h1>User Component</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, aut!</p>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>
        <p>Roll No: {user.rollNo}</p>
    </div>
  )
}

export default CSBSArraysJSXBChildA