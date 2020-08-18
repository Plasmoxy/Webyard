import React from 'react'
import { PageHeader } from '../components/PageHeader'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { fetchApiData, getApiImageUrl } from '../api/api'
import { Row, Col } from 'react-bootstrap'
import addBigSvg from '../icons/add_big.svg'

export function PhotosPage() {
  
  const { path } = useParams()
  
  console.log(path)
  
  const qGallery = useQuery(
    ["fetchGallery", path],
    () => fetchApiData(`gallery/${path}`)
  )
  
  return <>
    <PageHeader title={qGallery.data?.gallery.name ?? ""} backButton={true} />
    
    {qGallery.isSuccess && 
      <Row>
        {qGallery.data.images.map((image: any) =>
          <Col key={image.fullpath} sm={6} lg={3}>
            <img src={getApiImageUrl(image.fullpath)} />
          </Col>
        )}

        <Col sm={6} lg={3} className="d-flex">
          <div className="gallery-add-category-card">
            <img src={addBigSvg} className="my-3" />
            <h2>Pridať kategóriu</h2>
          </div>
        </Col>
      </Row>
    }
  </>
}