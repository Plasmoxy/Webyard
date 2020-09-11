import React, { useState, useContext } from 'react'
import { AppContext } from './AppContext'

export function UsernameSetter() {
    
    const {setUsername, subscribers, setSubscribers} = useContext(AppContext)
    const [text, setText] = useState("")

    return <div className="box">
        {console.log("UsernameSetter render")}
        Set your username:
        <input
            type="text" 
            value={text}
            onChange={({target}) => setText(target.value)}
        />
        
        <button onClick={() => setUsername(text)}>SET!</button>
        <button onClick={() => setSubscribers(subscribers + 1)}>Add subscriber</button>

    </div>
}