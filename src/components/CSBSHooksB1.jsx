import React, { useEffect } from 'react'

function CSBSHooksB1({counter}) {

  function handleCounterChange() {
    console.log("Counter value changed to: ", counter);
  }

  useEffect(() => {
    handleCounterChange();
  }, [counter]); // Dependency array to trigger the effect when counter changes

  return (
    <div style={{border:"2px solid black", margin:"20px", backgroundColor:"lightblue" , padding :"20px", width:"400px"}}>
        <h1>Counter Component</h1>
        <h2>Counter : {counter}</h2>
    </div>
  )
}

export default CSBSHooksB1