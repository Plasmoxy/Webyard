import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'core-js/stable'
import React, { useEffect } from "react"
import { render } from "react-dom"
import { ModalProvider } from 'react-modal-hook'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { GalleriesPage } from './pages/GalleriesPage'
import { ReactQueryDevtools} from 'react-query-devtools'
import 'regenerator-runtime/runtime'
import './App.scss'
import nightcityJpg from './images/nightcity.jpg'
import { BrowserRouter, Route, useHistory } from 'react-router-dom'
import { PageHeader } from './components/PageHeader'
import { TestPage } from './pages/TestPage'

const routes = [
  { path: "/", component: GalleriesPage },
  { path: "/test/:path", component: TestPage },
]

function App() {

  const history = useHistory()

  useEffect(() => {
    return history.listen((loc, action) => {
      console.log(`-> ${action} ${loc.pathname}`)
      // scroll to top on history push
      if (action === "PUSH") {
        window.scrollTo(0, 0)
      }
    })
  }, [history])

  return <>
    <ReactQueryDevtools />
  
    <div className="background-container">
      <img src={nightcityJpg} />
    </div>

    <div className="container content-container px-0">
      <h1 className="text-light">Fotogaléria</h1>
      
      {routes.map(r => <Route key={r.path} exact path={r.path}>{({ match }) => (
        <CSSTransition
          in={match != null}
          timeout={3000}
          classNames="transition-page"
          unmountOnExit
        >
          <div className="content-page">
            <r.component />
          </div>
        </CSSTransition>
      )}</Route>)}
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
