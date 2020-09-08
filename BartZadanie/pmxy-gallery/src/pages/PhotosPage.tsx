import React, { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { apiGet, apiPost, getApiImageUrl } from '../api/api'
import { Row, Col } from 'react-bootstrap'
import addBigSvg from '../icons/add_big.svg'
import "./PhotosPage.scss"
import { PhotoCard } from '../components/PhotoCard'
import nightCityJpg from '../images/nightcity.jpg'
import { AppLightbox } from '../components/AppLightbox'
import { useStore } from '../model/Store'

export function PhotosPage() {
  
  const update = useStore(s => s.update)
  
  const { path } = useParams()
  const qGallery = useQuery(["fetchGallery", path], async () => {
    if (path) return (await apiGet(`gallery/${path}`))?.data
  })
  
  return <>
  
    <PageHeader title={qGallery.data?.gallery.name ?? ""} backButton={true} />
    
    {path && qGallery.isSuccess && 
      <Row>
        {(qGallery.data.images as any[]).map((image: any, imageIdx) =>
          <Col key={image.fullpath} sm={6} lg={3} className="d-flex justify-content-center p-0">
            <PhotoCard
              image={getApiImageUrl(image.fullpath, 290, 192)}
              onClick={() => {
                update(s=>{
                  s.lightbox.images = qGallery.data.images
                  s.lightbox.idx = imageIdx
                  s.lightbox.open = true
                })
                // setLightboxIdx(imageIdx)
                // setLightboxOpen(true)
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