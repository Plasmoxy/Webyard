import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from "react"
import { render } from "react-dom"
import './App.scss'
import './images/gallery-thumb.jpg';
import { Container } from 'react-bootstrap'
import { Switch } from 'react-router-dom'

function App() {
  return <>
    <div className="background-container">
      <img src="images/nightcity.jpg" />
    </div>
    
    <div className="container content">
      <h1 className="text-light">FOTOGALÉRIA</h1>
      <h2 className="text-light mt-5">KATEGÓRIE</h2>
      <hr />
      <div className="mt-4"></div>
      
      <div className="gallery-tiles">
        <div className="gallery-row">
          <div className="gallery-column">
            <div className="gallery-card">
              <img src="images/town.jpg" />
              <div className="p-1 pt-2 text-center text-uppercase">
                <span>Hory</span>
              </div>
            </div>
          </div>
          <div className="gallery-column">
            <div className="gallery-card">
              <img src="images/walkercity.jpg" />
              <div className="p-1 pt-2 text-center text-uppercase">
                <span>Mestá</span>
              </div>
            </div>
          </div>
          <div className="gallery-column">
            <div className="gallery-card">
              <img src="images/gallery-thumb.jpg" />
              <div className="p-1 pt-2 text-center text-uppercase">
                <span>Hory</span>
              </div>
            </div>
          </div>
          <div className="gallery-column">
            <div className="gallery-card">
              <img src="./images/gallery-thumb.jpg" />
              <div className="p-1 pt-2 text-center text-uppercase">
                <span>Hory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </>
}

render(<App />, document.getElementById("reactRoot"))
