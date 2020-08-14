import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from "react"
import { render } from "react-dom"
import './App.scss'
import galleryThumb from './images/gallery-thumb.jpg'
import townJpg from './images/town.jpg'
import walkercityJpg from './images/walkercity.jpg'
import nightcityJpg from './images/nightcity.jpg'
import { Container } from 'react-bootstrap'
import { Switch } from 'react-router-dom'


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

      <div className="gallery-tiles">
        <div className="gallery-row">
          <div className="gallery-column">
            <div className="gallery-card">
              <img src={townJpg} />
              <div className="p-1 pt-2 text-center text-uppercase">
                <span>Hory</span>
              </div>
            </div>
          </div>
          <div className="gallery-column">
            <div className="gallery-card">
              <img src={walkercityJpg} />
              <div className="p-1 pt-2 text-center text-uppercase">
                <span>Mestá</span>
              </div>
            </div>
          </div>
          <div className="gallery-column">
            <div className="gallery-card">
              <img src={galleryThumb} />
              <div className="p-1 pt-2 text-center text-uppercase">
                <span>Hory</span>
              </div>
            </div>
          </div>
          <div className="gallery-column">
            <div className="gallery-card">
              <img src={galleryThumb} />
              <div className="p-1 pt-2 text-center text-uppercase">
                <span>Hory</span>
              </div>
            </div>
          </div>
          
          <div className="gallery-column">
            <div className="gallery-card">
              <img src={galleryThumb} />
              <div className="p-1 pt-2 text-center text-uppercase">
                <span>Hory</span>
              </div>
            </div>
          </div>
          <div className="gallery-column">
            <div className="gallery-card">
              <img src={galleryThumb} />
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
