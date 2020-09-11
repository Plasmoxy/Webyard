import React, { useRef } from 'react'
import { AppModal } from './AppModal'
import prevSvg from '../icons/prev.svg'
import nextSvg from '../icons/next.svg'
import { getApiImageUrl } from '../api/api'
import { useStore } from '../model/Store'

/*
images={qGallery.data?.images}
idx={lightboxIdx}
open={lightboxOpen}
onClosed={() => setLightboxOpen(false)}
onSlideClick={(forward) => setLightboxIdx(lightboxIdx + (forward ? 1 : -1))}

*/

export const AppLightbox: React.FC = () => {

  const update = useStore(s => s.update)
  const images = useStore(s => s.lightbox.images)
  const idx = useStore(s => s.lightbox.idx)
  const open = useStore(s => s.lightbox.open)

  const onClosed = () => {
    update(s => { s.lightbox.open = false })
  }

  const onSlideClick = (idxDiff: number) => {
    update(s => { s.lightbox.idx += idxDiff })
  }

  return <AppModal width={800} open={open} onClosed={onClosed} closeButtonStyle={{ marginRight: 40 }}>
    {images && images.length > 0 &&
      <div className="d-flex">
        <div
          onClick={() => {
            if (idx > 0) onSlideClick(-1)
          }}
          style={{ width: 40 }}
          className={`${idx > 0 ? "clickable" : ""} d-flex justify-content-center align-items-center`}
        >
          <img style={{ opacity: idx > 0 ? 1 : 0.5 }} src={prevSvg} />
        </div>

        <div
          className="d-flex align-items-center"
          style={{ flex: 1, minHeight: 480 }}
          onClick={() => {
            if (idx < images.length - 1) onSlideClick(1)
          }}
        >
          {/* apply key in here, cause we need to diff entire img */}
          <img
            key={idx}
            src={getApiImageUrl(images[idx].fullpath, 720, 0)}
            style={{ borderRadius: 5 }}
          />
        </div>

        <div
          onClick={() => {
            if (idx < images.length - 1) onSlideClick(1)
          }}
          style={{ width: 40 }}
          className={`${idx < images.length - 1 ? "clickable" : ""} d-flex justify-content-center align-items-center`}
        >
          <img style={{ opacity: idx < images.length - 1 ? 1 : 0.5 }} src={nextSvg} />
        </div>
      </div>
    }
  </AppModal>
}