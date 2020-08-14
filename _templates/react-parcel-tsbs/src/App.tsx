import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from "react"
import { render } from "react-dom"
import './App.scss'
import { Container } from 'react-bootstrap'

function App() {
  return <>
    <Container>
      yes
    </Container>
  </>
}

render(<App />, document.getElementById("reactRoot"))
