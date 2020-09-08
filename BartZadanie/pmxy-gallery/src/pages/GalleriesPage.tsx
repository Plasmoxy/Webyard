import React, { useState } from 'react'
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

function NewCategoryForm({hide}: {hide: () => any}) {
  
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  
  const submit = () => {
    
  }
  
  return <Card className="p-4">
    <h1>PRIDAŤ KATEGÓRIU</h1>
    <div className="d-flex justify-content-end align-items-center my-2">
      <input
        style={{flex: 1, fontSize: 18}} className="mx-1" type="text"
        value={name} onChange={e => setName(e.target.value)}
      ></input>
      <Button className="p-2" onClick={submit}><img src={addSvg} /> Pridať</Button>
    </div>
    <hr style={{margin: 0, borderTop: "solid 0.2rem rgba(0, 0, 0, 0.1)"}}/>
    {error !== "" && <p className="text-danger mt-4">{error}</p>}
  </Card>
}

export function GalleriesPage() {

  const [show, hide] = useAppModal(() => <NewCategoryForm hide={hide} />)

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
    
    
  </>
}