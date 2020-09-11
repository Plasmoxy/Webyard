import React from 'react'
import './CategoryCard.scss'
import galleryThumbJpg from '../images/gallery-thumb.jpg'

interface Props {
  title: string
  image: string
  onClick?: () => any
}

export const CategoryCard: React.FC<Props> = ({
  title, image, onClick
}) => {
  return <div className="category-card" onClick={onClick} >
    <img src={image} />
    <div className="p-1 pt-2 text-center text-grey">
      <h2>{title}</h2>
    </div>
  </div>
}