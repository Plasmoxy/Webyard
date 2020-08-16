import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'core-js/stable'
import React from "react"
import { render } from "react-dom"
import { ModalProvider } from 'react-modal-hook'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { GalleryPage } from './pages/GalleryPage'
import 'regenerator-runtime/runtime'
import './App.scss'
import nightcityJpg from './images/nightcity.jpg'
import { BrowserRouter, Route } from 'react-router-dom'
import { AppHeader } from './components/AppHeader'

function App() {

  return <>
    <div className="background-container">
      <img src={nightcityJpg} />
    </div>

    <Route exact path="/">{({match}) => (
      <CSSTransition
        in={match != null}
        timeout={300}
        classNames="page-transition"
        unmountOnExit
        >
          <div className="container content">
            <AppHeader title="Galéria" subtitle="Kategórie" />
            <GalleryPage />
          </div>
        </CSSTransition>
    )}</Route>
    
    <Route exact path="/test">{({match}) => (
      <CSSTransition
        in={match != null}
        timeout={300}
        classNames="page-transition"
        unmountOnExit
        >
          <div className="container content">
            <AppHeader title="TEst" subtitle="yeet" />
            <div className="text-light">YEET ROOUTE TEST</div>
          </div>
        </CSSTransition>
    )}</Route>
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
