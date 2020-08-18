import React from 'react'
import "./PhotoCard.scss"

interface Props {
  image: string
  onClick?: () => any
}

export const PhotoCard: React.FC<Props> = ({
  image, onClick
}) => {
  
  return <div className="photo-card m-1" onClick={onClick}>
    <img src={image} />
  </div>
}