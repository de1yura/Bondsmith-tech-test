import React from 'react'
import './PopupCard.css'

interface PopupCardProps{
  image: any;
  number: number;
}

const PopupCard = ({image, number}: PopupCardProps) => {
  return (
    <div className="episodeCard">
      <h4 className="episodeNum">Episode {number}</h4>
      <img src={image? image.medium : "image not available"} alt="episode thumbnail" />
    </div>
  )
}

export default PopupCard
