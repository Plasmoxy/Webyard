import React from 'react'
import "./GalleryPage.scss"
import { Row, Col, Card, Button, Spinner } from 'react-bootstrap'
import galleryThumbJpg from '../images/gallery-thumb.jpg'
import addBigSvg from '../icons/add_big.svg'
import { Link } from 'react-router-dom'
import { CategoryCard } from '../components/CategoryCard'
import { PageHeader } from '../components/PageHeader'
import { useAppModal } from '../components/AppModal'
import axios from 'axios'
import { useQuery } from 'react-query'
import { getApiImageUrl, fetchApiData } from '../api/api'

export function GalleryPage() {

  const [show, hide] = useAppModal(() => <Card className="p-3">
    <h1>Jakub<br />ty bryndzový kokot.</h1>
    <div className="d-flex justify-content-end">
      <Button onClick={hide}>Súhlasím</Button>
    </div>
  </Card>)

  const qCategories = useQuery(
    'fetchCategories',
    () => fetchApiData("gallery")
  )

  return <>
    <PageHeader title="Kategórie" backButton={false} />
    
    {qCategories.isSuccess && 
      <Row>
        {qCategories.data.galleries.map((gallery: any) =>
          <Col key={gallery.path} sm={6} lg={3}>
            <Link to={{
              pathname: "/test",
              state: { mesage: "kys" }
            }}>
              <CategoryCard title={gallery.name} image={getApiImageUrl(gallery.image.fullpath)} />
            </Link>
          </Col>
        )}

        <Col sm={6} lg={3} className="d-flex">
          <div className="gallery-add-category-card" onClick={show}>
            <img src={addBigSvg} className="my-3" />
            <h2>Pridať kategóriu</h2>
          </div>
        </Col>
      </Row>
    }
  </>
}