import React from 'react'
import { PageHeader } from '../components/PageHeader'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { fetchApiData, getApiImageUrl } from '../api/api'
import { Row, Col } from 'react-bootstrap'
import addBigSvg from '../icons/add_big.svg'
import "./PhotosPage.scss"
import { PhotoCard } from '../components/PhotoCard'
import { useAppModal } from '../components/AppModal'
import nightCityJpg from '../images/nightcity.jpg'

export function PhotosPage() {
  
  const { path } = useParams()
  
  const [showLightbox, hideLightbox] = useAppModal(() => <img width="100%"  src={nightCityJpg} />)
  
  const qGallery = useQuery(["fetchGallery", path], () => {
    if (path) return fetchApiData(`gallery/${path}`)
  })
  
  return <>
    <PageHeader title={qGallery.data?.gallery.name ?? ""} backButton={true} />
    
    {path && qGallery.isSuccess && 
      <Row>
        {qGallery.data.images.map((image: any) =>
          <Col key={image.fullpath} sm={6} lg={3} className="d-flex justify-content-center p-0">
            <PhotoCard
              image={getApiImageUrl(image.fullpath, 290, 192)}
              onClick={() => showLightbox()}
            />
          </Col>
        )}

        <Col sm={6} lg={3} className="d-flex">
          <div className="gallery-add-photo-card">
            <img src={addBigSvg} className="my-3" />
            <h2>Pridať fotky</h2>
          </div>
        </Col>
      </Row>
    }
  </>
}