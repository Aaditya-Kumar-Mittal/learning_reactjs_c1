import React from 'react'
import useToggle from './hooks/useToggle'

function CSBSCustomHooksA() {

    const [value, toggleValue] = useToggle(false);
  return (
    <div>
        <h1>Custom Hooks in React JS</h1>

        <br />

        <h2>{value ? "Heading is Visible" : "Heading is Hidden"}</h2>

        <br />

        <button onClick={toggleValue}>Toggle Heading</button>
    </div>
  )
}

export default CSBSCustomHooksA