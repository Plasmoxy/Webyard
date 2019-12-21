import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from "./pages/About"
import Nav from "./pages/Nav"
import Shop from "./pages/Shop"
import './style.sass'

export default function App() {
  return <>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pages/about" exact component={About} />
        <Route path="/pages/shop" exact component={Shop} />
      </Switch>
    </BrowserRouter>
  </>
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
)
