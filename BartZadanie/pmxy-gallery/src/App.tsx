import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'core-js/stable'
import React from "react"
import { render } from "react-dom"
import { ModalProvider } from 'react-modal-hook'
import { TransitionGroup } from 'react-transition-group'
import { GalleryPage } from './pages/GalleryPage'
import 'regenerator-runtime/runtime'
import './App.scss'
import nightcityJpg from './images/nightcity.jpg'
import { BrowserRouter } from 'react-router-dom'

const routes = [
  { path: '/', name: 'Home', component: GalleryPage},
  { path: '/test', name: 'Test', component: <div className="text-light">TEST ROUTE</div>},
]

function App() {

  return <>
    <div className="background-container">
      <img src={nightcityJpg} />
    </div>

    <div className="container content">

      <h1 className="text-light">FOTOGALÉRIA</h1>
      <h2 className="text-light mt-5">KATEGÓRIE</h2>
      <hr />
      <div className="mt-4"></div>

      <span>WAT</span>
    </div>
  </>
}

render(
  <ModalProvider rootComponent={TransitionGroup}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ModalProvider>,
  document.getElementById("reactRoot")
)
