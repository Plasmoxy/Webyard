import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { PhotoCard } from '../components/PhotoCard'
import addBigSvg from '../icons/add_big.svg'
import { useStore } from '../model/Store'
import * as gservice from '../services/gallery.service'
import "./PhotosPage.scss"

export function PhotosPage() {
  
  const update = useStore(s => s.update)
  
  const { path } = useParams<{path: string}>()
  const qGallery = useQuery(["fetchGallery", path], () => {
    if (path) return gservice.fetchGallery(path)
  })
  
  return <>
    <PageHeader title={qGallery.data?.name ?? ""} backButton={true} />
    
    {path && qGallery.isSuccess && 
      <Row>
        {(qGallery.data.images as any[]).map((image: any, imageIdx) =>
          <Col key={image.name} sm={6} lg={3} className="d-flex justify-content-center p-0">
            
            {/* TODO: 290x192 PHOTO ??? resize thumbnail ? */}
            <PhotoCard
              image={gservice.getThumbnailUrl(image.name)}
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