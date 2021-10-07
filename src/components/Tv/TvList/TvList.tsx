import React from 'react'
import './TvList.css'

interface TvProps {
  show: any;
  OpenPopup(id:number): void;
}

const Tv = ({show, OpenPopup}: TvProps) => {
  return (
    <div className="tvCard" onClick={() => OpenPopup(show.id)}>
      <img data-testid="showImage" src={show.image? show.image.medium: "loading image..."} alt={show.image? show.image.original: "no image currently available"} />

      <div  className="name">
        <h3 data-testid="showName">{show.name}</h3>
      </div>
      
    </div>
  )
}

export default Tv
