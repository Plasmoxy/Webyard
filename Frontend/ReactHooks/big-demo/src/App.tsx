import React from "react"
import { render } from "react-dom"
import './style.sass'
import { AppProvider } from "./AppContext"
import { UsernameDisplay } from "./UsernameDisplay"
import { UsernameSetter } from "./UsernameSetter"

function App() {
  return <AppProvider>
    <UsernameDisplay /> <br></br>
    <UsernameSetter />
  </AppProvider>
}

render(<App />, document.getElementById("reactRoot"))
