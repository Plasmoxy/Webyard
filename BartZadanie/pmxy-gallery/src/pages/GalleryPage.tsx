import React from 'react'
import "./GalleryPage.scss"
import { Row, Col } from 'react-bootstrap'
import galleryThumbJpg from '../images/gallery-thumb.jpg'
import addBigSvg from '../icons/add_big.svg'
import { Link } from 'react-router-dom'
import { CategoryCard } from '../components/CategoryCard'
import { PageHeader } from '../components/PageHeader'

export function GalleryPage() {

  return <>
    <PageHeader title="Kategórie" backButton={false} />
    <div className="gallery">
      <Row>
        {...(() => {
          const items = []
          for (let i = 0; i <= 5; i++) {
            items.push(
              <Col key={i} sm={6} lg={3}>
                <Link to={{ pathname: "/test", state: { mesage: "kys" } }}>
                  <CategoryCard title="Nichts" image={galleryThumbJpg} />
                </Link>
              </Col>
            )
          }
          items.push(

          )
          return items
        })()}

        <Col sm={6} lg={3} className="d-flex">
          <div className="gallery-add-category-card">
            <img src={addBigSvg} className="my-3" />
            <h2>Pridať kategóriu</h2>
          </div>
        </Col>
      </Row>
    </div></>
}