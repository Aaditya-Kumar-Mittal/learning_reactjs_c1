import React from 'react'

function CSBSForwardRefC(props) {
  return (
    <div>
        <h3>Implementing Forward Ref in Newer Versions of React</h3>
        <input type="text" ref={props.ref} />
    </div>
  )
}

export default CSBSForwardRefC