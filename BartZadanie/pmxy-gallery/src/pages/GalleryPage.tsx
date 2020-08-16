import React from 'react'
import { Row, Col } from 'react-bootstrap'
import townJpg from '../images/town.jpg'
import addBigSvg from '../icons/add_big.svg'
import { Link } from 'react-router-dom'

export function GalleryPage() {
  
  return <div className="gallery">
    <Row>
      {...(() => {
        const items = []
        for (let i = 0; i <= 5; i++) {
          items.push(
            <Col key={i} sm={6} lg={3}>
              <Link to="/test" style={{textDecoration: "none"}}>
                <div className="gallery-card" >
                  <img src={townJpg} />
                  <div className="p-1 pt-2 text-center text-grey">
                    <h2>Hory</h2>
                  </div>
                </div>
              </Link>
            </Col>
          )
        }
        items.push(
          <Col key={items.length} sm={6} lg={3} className="d-flex">
            <div className="gallery-add-category-card">
              <img src={addBigSvg} className="my-3"/>
              <h2>Pridať kategóriu</h2>
            </div>
          </Col>
        )
        return items
      })()}
    </Row>
  </div>
}