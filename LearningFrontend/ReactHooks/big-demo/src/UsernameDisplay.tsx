import React, { useContext, useMemo } from 'react'
import "./style.sass"
import { AppContext } from './AppContext'

export function UsernameDisplay() {

    const {username} = useContext(AppContext)

    return useMemo(() => <>
        {console.log("UsernameDisplay render")}
        <div className="box">
            Username: {username}
        </div>
    </>, [username])

}