import React from "react"
import { render } from "react-dom"
import './style.sass'
import { AppProvider } from "./AppContext"
import { UsernameDisplay } from "./UsernameDisplay"
import { UsernameSetter } from "./UsernameSetter"
import { SubscriberCount } from "./SubscriberCount"

function App() {
  return <AppProvider>
    <UsernameDisplay />
    <SubscriberCount />
    <UsernameSetter />
  </AppProvider>
}

render(<App />, document.getElementById("reactRoot"))
