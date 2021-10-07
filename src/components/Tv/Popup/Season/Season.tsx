import React from 'react'
import PopupCard from './Episode/PopupCard'
import "./Season.css"

interface SeasonProp{
  season: any;
  index: number;
}

const Season = ({season, index, }: SeasonProp) => {

  return (
    <div className="seasonContainer">
      <h2>Season {index}</h2>
      <div className="seasonBox">
        {season.map((episode: any) => <PopupCard key={episode.id} {...episode}/>)}
      </div>
    </div>
  )
}

export default Season
