import React, { useRef } from 'react'
import {AppModal} from './AppModal'
import prevSvg from '../icons/prev.svg'
import nextSvg from '../icons/next.svg'
import { getApiImageUrl } from '../api/api'

interface Props {
  images: any[]
  idx: number
  open: boolean
  onClosed: () => any
  onSlideClick: (forward: boolean) => any
}

export const AppLightbox: React.FC<Props> = ({
  images, idx, open, onClosed, onSlideClick
}) => {
  
  if (images) {
    return <AppModal width={800} open={open} onClosed={onClosed} closeButtonStyle={{marginRight: 40}}>
      <div className="d-flex">
        
        <div
          onClick={() => {
            if (idx > 0) onSlideClick(false)
          }}
          style={{width: 40}}
          className={`${idx > 0 ? "clickable" : ""} d-flex justify-content-center align-items-center`}
        >
          <img style={{opacity: idx > 0 ? 1 : 0.5}} src={prevSvg} />
        </div>
        
        <div style={{flex: 1}}>
          {/* apply key in here, cause we need to diff entire img */}
          <img
            key={idx}
            src={getApiImageUrl(images[idx].fullpath, 720, 0)}
            style={{borderRadius: 5}}
          />
        </div>
        
        <div
          onClick={() => {
            if (idx < images.length - 1) onSlideClick(true)
          }}
          style={{width: 40}}
          className={`${idx < images.length - 1 ? "clickable" : ""} d-flex justify-content-center align-items-center`}
        >
          <img style={{opacity: idx < images.length - 1 ? 1 : 0.5}} src={nextSvg} />
        </div>
      </div>
    </AppModal>
  } else {
    return <></>
  }
}