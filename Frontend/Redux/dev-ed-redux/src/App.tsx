import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './reducers/counter'
import AuthSetter from './components/AuthSetter'

function App() {
  
  const counter  = useSelector<any, number>(s => s.counter)
  const isLogged = useSelector<any, boolean>(s => s.isLogged)
  const {username, password}= useSelector<any, any>(s => s.root)
  const dispatch = useDispatch()

  return (
    <div>
      {console.log("App rendered")}
      <h1>Counter = {counter}</h1>
      {isLogged && <h1>Hello im logged in!</h1>}
      Username: {username} <br />
      Password: {password} <br />
      <button onClick={() => dispatch(increment())}>More</button>
      <button onClick={() => dispatch(decrement())}>Less</button>
      <button onClick={() => dispatch({type: 'SIGN_IN'})}>
        Login
      </button>

      <br />
      <AuthSetter />
    </div>
  )
}

export default App
