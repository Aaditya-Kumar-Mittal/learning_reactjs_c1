import React, { useRef } from 'react'
import CSBSForwardRefB from './CSBSForwardRefB';
import CSBSForwardRefC from './CSBSForwardRefC';

function CSBSForwardRefA() {

    const inputRef = useRef(null);
    const inputRefB = useRef(null);

    const updateInput = () => {
        console.log("useInput Function Called");
        
        inputRef.current.value = 1000;

        inputRef.current.focus();

        inputRef.current.style.backgroundColor = "yellow";
    }

    const updateInputB = () => {
        console.log("useInput Function Called");
        
        inputRefB.current.value = 2000;

        inputRefB.current.focus();

        inputRefB.current.style.backgroundColor = "palegreen";
    }

  return (
    <div style={{
        margin : "20px"
    }}>
        <h1>Forward Ref Demo 1</h1>
        <CSBSForwardRefB ref={inputRef} />
        <br />
        <button onClick={updateInput}>Update Input Field</button>
        <br />
        <br />
        <CSBSForwardRefC ref={inputRefB} />
        <br />
        <button onClick={updateInputB}>Update Input Field 2</button>

    </div>
  )
}

export default CSBSForwardRefA