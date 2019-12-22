import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAuth } from '../reducers/root'

export default function AuthSetter() {

    const dispatch = useDispatch()

    const [name, setName]= useState("")
    const [pass, setPass] = useState("")
    
    function handleSet() {
        dispatch(setAuth(name, pass))
    }
    
    return (
        <div style={{border: "1px solid red", padding: 10, margin: 10}}>
            Name: <input value={name} onChange={({target})=> setName(target.value)}></input>

            <br />

            Password: <input value={pass} onChange={({target})=> setPass(target.value)}></input>

            <br />
            <button onClick={handleSet}>Set</button>
        </div>
    )
}
