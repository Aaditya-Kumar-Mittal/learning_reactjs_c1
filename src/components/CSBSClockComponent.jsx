import React, { useEffect } from 'react'

function CSBSClockComponent() {
    const [color, setColor] = React.useState('black')
    const [time, setTime] = React.useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(interval)
    }, [])
  return (
    <div>
        <h1>Making a Clock Component</h1>

        <h3>Select a color</h3>
        <select name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="violet">Violet</option>
            <option value="indigo">Indigo</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="orange">Orange</option>
            <option value="red">Red</option>
            <option value="magenta">Magenta</option>
        </select>

        <h3>Clock</h3>
        <div style={{color: color, backgroundColor: 'lightgray', width: 'fit-content', padding: '20px', borderRadius: '15px'}}>
            <h1>{time}</h1>
        </div>
    </div>
  )
}

export default CSBSClockComponent