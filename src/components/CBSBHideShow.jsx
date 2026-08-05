import React, {useState} from 'react'

function CBSBHideShow() {

  
  const [display, setDisplay] = useState(true);

  return (
    <div>
        <h3>CBSBHideShow</h3>
        {display && <h1>This is the text to be toggled.</h1>}
        <button onClick={() => setDisplay(!display)}>Toggle Display : {display ? 'Visible' : 'Hidden'}</button>
        
    </div>
  )
}

export default CBSBHideShow