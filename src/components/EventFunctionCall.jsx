import React from 'react'

function EventFunctionCall() {
  function callFunction() {
    alert("Function called!");
    }

 const fruit = (fruitName) => {
    alert(`Fruit function called with ${fruitName}!`);
 }
  return (
    <>
    <button onClick={callFunction}>Call Function</button>
    <br />
    <button onClick={() => fruit("Apple")}>Call Fruit Function</button>    
    <button onClick={() => fruit("Banana")}>Call Fruit Function</button>    
    </>
  )
}

export default EventFunctionCall