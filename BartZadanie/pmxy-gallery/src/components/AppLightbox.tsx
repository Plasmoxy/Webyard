import React, { useRef } from 'react'
import {AppModal} from './AppModal'
import prevSvg from '../icons/prev.svg'
import nextSvg from '../icons/next.svg'

interface Props {
  images: string[]
  idx: number
  open: boolean
}

export const AppLightbox: React.FC<Props> = ({images, idx, open}) => {
  
  return <AppModal width={700} open={open} onClosed={() => {}}>
    <div className="d-flex">
      <div style={{width: 40}} className="clickable d-flex justify-content-center align-items-center">
        <img src={prevSvg} />
      </div>
      <div style={{flex: 1}}>
        <img width="100%" src={images[idx]} />
      </div>
      <div style={{width: 40}} className="clickable d-flex justify-content-center align-items-center">
        <img src={nextSvg} />
      </div>
    </div>
  </AppModal>
}