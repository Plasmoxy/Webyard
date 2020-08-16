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
    
    <Route key="/" exact path="/">{({match}) => (
        <CSSTransition
          in={match != null}
          timeout={10000}
          classNames="transition-page"
          unmountOnExit
          >
            <div className="container content transition-page">
              <AppHeader title="Fotogaléria" subtitle="Kategórie" />
              <GalleryPage />
            </div>
          </CSSTransition>
      )}</Route>
      
    <Route key="/test" exact path="/test">{({match}) => (
      <CSSTransition
        in={match != null}
        timeout={10000}
        classNames="transition-page"
        unmountOnExit
        >
          <div className="container content transition-page">
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
