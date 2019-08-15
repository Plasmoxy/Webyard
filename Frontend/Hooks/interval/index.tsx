import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import { Button } from '@material-ui/core'

const App = () => {
    const [time, setTime] = useState(0.0)
    const [active, setActive] = useState(false)
    const [step, setStep] = useState(0.01)
    
    useEffect(() => {
        const id = setInterval(() => {
            if (active) setTime(t => t + step)
        }, 10)
        return () => clearInterval(id)
    }, [active, step])
    
    return <div>
        
        <Button variant="contained" color="primary" onClick={() => setActive(!active)}>Active={active ? "YES" : "NO"}</Button>
        <input value={step} onChange={e => setStep(Number(e.target.value))}></input>
        <br/>
        <span style={{fontSize: 30}}>{time} step={step}</span>
    </div>
}

render(<App />, document.getElementById("root"))