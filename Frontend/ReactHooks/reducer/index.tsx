import { render } from 'react-dom'
import React, {useReducer, useState, useEffect} from 'react'
import { Button } from '@material-ui/core'

type State = {
    a: number,
    b: number
}

const actions = {
    default: (s: State) => {throw new Error()},
    incrementA: (s: State) => ({
        a: s.a + 1
    }),
    reset: (s: State) => ({
        a: 0,
        b: 0
    })
}

const App = () => {
    const [state, dispatch] = useReducer((s: State, action: string) => {
        return (actions[action] || actions["default"])(s)
    },{
        a: 7,
        b: 7
    })

    return <div>
        a={state.a}, b={state.b}<br/>
        <button onClick={() => dispatch("reset")}>Reset</button>
        <button onClick={() => dispatch("incrementA")}>Incr A</button>
    </div>
}

render(<App/>, document.getElementById("root"))