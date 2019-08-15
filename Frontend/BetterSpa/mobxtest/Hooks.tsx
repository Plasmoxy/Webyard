import React, { useState, useEffect } from 'react'
import { promisify } from 'util'
const timeout = promisify(setTimeout)

export const Hooks: React.FC = () => {
    const [text, setText] = useState("")

    useEffect(() => {
        setText("LOLOLO")
        console.log("XD")
    }, [])

    return <div>
        {text}
    </div>
}