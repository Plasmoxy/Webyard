import React, { useState, useContext } from 'react'
import { AppContext } from './AppContext'

export function UsernameSetter() {
    
    const {state, setState} = useContext(AppContext)
    const [text, setText] = useState("")

    const handleSetClick = () => {
        console.log("clic")
        setState(s => ({...s, username: text}))
    }

    const handleAddSub = () => {
        setState(s => ({...s,
            subscribers: s.subscribers + 1
        }))
    }

    return <div className="box">
        {console.log("UsernameSetter render")}
        Set your username:
        <input
            type="text" 
            value={text}
            onChange={({target}) => setText(target.value)}
        />
        
        <button onClick={handleSetClick}>SET!</button>
        <button onClick={handleAddSub}>Add subscriber</button>

    </div>
}