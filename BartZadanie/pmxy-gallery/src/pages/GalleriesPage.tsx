import React from 'react'
import "./GalleriesPage.scss"
import { Row, Col, Card, Button, Spinner } from 'react-bootstrap'
import galleryThumbJpg from '../images/gallery-thumb.jpg'
import addBigSvg from '../icons/add_big.svg'
import addSvg from '../icons/add.svg'
import { Link } from 'react-router-dom'
import { CategoryCard } from '../components/CategoryCard'
import { PageHeader } from '../components/PageHeader'
import { useAppModal } from '../components/AppModal'
import axios from 'axios'
import { useQuery } from 'react-query'
import { getApiImageUrl, fetchApiData } from '../api/api'
import { useStore } from '../model/Store'

function A() {
  const count = useStore(s => s.count)
  
  return <p>
    A count : {count}
  </p>
}

function B() {
  const count = useStore(s => s.count)
  const set = useStore(s => s.set)
  
  return <p>
    B count : {count} <br/>
    
    <Button variant="primary" onClick={() => set(s => {s.count++})}>Increment</Button>
    <br />
    <Button variant="danger" onClick={() => set(s => {s.count--})}>Decrement</Button>
    <br />
    <Button variant="danger" onClick={() => {
      set(s => {s.count = 5})
    }}>Set</Button>
    <br />
  </p>
}

export function GalleriesPage() {

  const [show, hide] = useAppModal(() => <Card className="p-3">
    <h1>YES.</h1>
    <div className="d-flex justify-content-end">
      <Button className="p-2" onClick={hide}><img src={addSvg} /> Pridať</Button>
    </div>
  </Card>)

  const qGalleries = useQuery(
    'fetchCategories',
    () => fetchApiData("gallery")
  )

  return <>
    <PageHeader title="Kategórie" backButton={false} />
    
    {qGalleries.isSuccess && 
      <Row>
        {qGalleries.data.galleries.map((gallery: any) =>
          <Col key={gallery.path} sm={6} lg={3}>
            <Link to={`/gallery/${gallery.path}`}>
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
    
    <A />
    <B />
  </>
}