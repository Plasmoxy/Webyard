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
}

export const AppLightbox: React.FC<Props> = ({
  images, idx, open, onClosed
}) => {
  
  return <AppModal width={700} open={open} onClosed={onClosed}>
    <div className="d-flex">
      <div style={{width: 40}} className="clickable d-flex justify-content-center align-items-center">
        <img src={prevSvg} />
      </div>
      <div style={{flex: 1}}>
        {images && <img width="100%" src={getApiImageUrl(images[idx].fullpath, 620, 0)} />}
      </div>
      <div style={{width: 40}} className="clickable d-flex justify-content-center align-items-center">
        <img src={nextSvg} />
      </div>
    </div>
  </AppModal>
}