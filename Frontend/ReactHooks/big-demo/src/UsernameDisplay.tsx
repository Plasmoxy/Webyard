import React, { useContext, useMemo } from 'react'
import "./style.sass"
import { AppContext } from './AppContext'

export function UsernameDisplay() {

    const {state, setState} = useContext(AppContext)
    const {username} = state

    return useMemo(() => <>
        {console.log("UsernameDisplay render")}
        <div className="box">
            Username: {username}
        </div>
    </>, [username])

}