import React from 'react'
import "./GalleryPage.scss"
import { Row, Col, Card, Button } from 'react-bootstrap'
import galleryThumbJpg from '../images/gallery-thumb.jpg'
import addBigSvg from '../icons/add_big.svg'
import { Link } from 'react-router-dom'
import { CategoryCard } from '../components/CategoryCard'
import { PageHeader } from '../components/PageHeader'
import { useAppModal } from '../components/AppModal'
import axios from 'axios'
import { useQuery } from 'react-query'

export function GalleryPage() {
  
  const [show, hide] = useAppModal(() => <Card className="p-3">
    <h1>Jakub<br/>ty bryndzový kokot.</h1>
    <div className="d-flex justify-content-end">
      <Button onClick={hide}>Súhlasím</Button>
    </div>
  </Card>)
  
  const qCategories = useQuery('fetchCategories', async () => {
    return (await axios.get('http://api.programator.sk/gallery'))?.data
  })
  
  console.log(qCategories.data)

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
          <div className="gallery-add-category-card" onClick={show}>
            <img src={addBigSvg} className="my-3" />
            <h2>Pridať kategóriu</h2>
          </div>
        </Col>
      </Row>
    </div></>
}