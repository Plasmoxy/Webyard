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
import { PageHeader } from './components/PageHeader'

function App() {

  return <>
    <div className="background-container">
      <img src={nightcityJpg} />
    </div>
    
    <div className="container content-container px-0">
      <h1 className="text-light">Fotogaléria</h1>
      <div className="mt-4"></div>
      
      <Route key="/" exact path="/">{({match}) => (
        <CSSTransition
          in={match != null}
          timeout={3000}
          classNames="transition-page"
          unmountOnExit
          >
            <div className="content-page">
              <PageHeader title="Kategórie" backButton={false} />
              <GalleryPage />
            </div>
          </CSSTransition>
      )}</Route>
        
      <Route key="/test" exact path="/test">{({match}) => (
        <CSSTransition
          in={match != null}
          timeout={3000}
          classNames="transition-page"
          unmountOnExit
          >
            <div className="content-page">
              <PageHeader title="Testovacia stránka" backButton={true}/>
              <div className="text-light">YEET ROOUTE TEST</div>
            </div>
          </CSSTransition>
      )}</Route>
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
