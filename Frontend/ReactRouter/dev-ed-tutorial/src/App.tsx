import React from "react"
import { render } from "react-dom"
import './style.sass'
import { Nav } from "./pages/Nav"
import { About } from "./pages/About"
import { Shop } from "./pages/Shop"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return <>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pages/about" component={About} />
        <Route path="/pages/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  </>
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
)

render(<App />, document.getElementById("reactRoot"))
