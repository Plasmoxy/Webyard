import React, { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { fetchApiData, getApiImageUrl } from '../api/api'
import { Row, Col } from 'react-bootstrap'
import addBigSvg from '../icons/add_big.svg'
import "./PhotosPage.scss"
import { PhotoCard } from '../components/PhotoCard'
import nightCityJpg from '../images/nightcity.jpg'
import { AppLightbox } from '../components/AppLightbox'

export function PhotosPage() {
  
  const { path } = useParams()
  const qGallery = useQuery(["fetchGallery", path], () => {
    if (path) return fetchApiData(`gallery/${path}`)
  })
  
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIdx, setLightboxIdx] = useState(0)
  
  return <>
    <AppLightbox
      images={qGallery.data?.images}
      idx={lightboxIdx}
      open={lightboxOpen}
      onClosed={() => setLightboxOpen(false)}
      onSlideClick={(forward) => setLightboxIdx(lightboxIdx + (forward ? 1 : -1))}
    />
  
    <PageHeader title={qGallery.data?.gallery.name ?? ""} backButton={true} />
    
    {path && qGallery.isSuccess && 
      <Row>
        {(qGallery.data.images as any[]).map((image: any, imageIdx) =>
          <Col key={image.fullpath} sm={6} lg={3} className="d-flex justify-content-center p-0">
            <PhotoCard
              image={getApiImageUrl(image.fullpath, 290, 192)}
              onClick={() => {
                setLightboxIdx(imageIdx)
                setLightboxOpen(true)
              }}
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