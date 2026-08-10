import React, { forwardRef } from 'react'

function CSBSForwardRefB(props, ref) {
  return (
    <div>
        <h3>Child Component for Forward Ref</h3>
        <h6>This was the old method</h6>
        <input type="text" ref={ref} />
    </div>
  )
}

export default forwardRef(CSBSForwardRefB);