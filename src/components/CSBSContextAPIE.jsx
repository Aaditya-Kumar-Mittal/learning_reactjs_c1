import React, { useContext } from 'react'
import { ContextData } from './CSBSContextAPIContextData'

function CSBSContextAPIE() {
   const contextValue = useContext(ContextData);
  return (
    <div style={{backgroundColor : "lightyellow" , padding : "20px"}}>
        <h1>Context API E</h1>
        <br />
        <h2>Context Value: {contextValue}</h2>
    </div>
  )
}

export default CSBSContextAPIE