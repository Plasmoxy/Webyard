import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React, { useState } from "react"
import { render } from "react-dom"
import './App.scss'
import galleryThumb from './images/gallery-thumb.jpg'
import townJpg from './images/town.jpg'
import walkercityJpg from './images/walkercity.jpg'
import nightcityJpg from './images/nightcity.jpg'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
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
      
      <Button onClick={() => setYoModalOpen(true)}>Open modal</Button>
      
      <div className="gallery">
        <Row>
          {...(() => {
            const items = [];
            for (let i = 0; i<= 10; i++) {
              items.push(
                <Col key={i} sm={6} lg={3}>
                  <div className="gallery-card" >
                    <img src={townJpg} />
                    <div className="p-1 pt-2 text-center text-uppercase">
                      <span>Hory</span>
                    </div>
                  </div> 
                </Col>
              )
            }
            return items;
          })()}
        </Row>
      </div>
    </div>
  </>
}

render(<App />, document.getElementById("reactRoot"))
