import React from 'react'
import './Popup.css'
import Season from './Season/Season'

interface PopupProps{
  popupShow: any;
  cast?: any;
  data: any;
  closePopup?(): void;
}
const Popup = ({popupShow, cast, data, closePopup}:PopupProps) => {

    const seasons = data.reduce((groupedSeasons: any, s: any, index:number) => {
    const season = s.season;
    if(groupedSeasons[season] == null) groupedSeasons[season] = []
    groupedSeasons[season].push(s)
    return groupedSeasons
  }, [])

  return (
    <div className="popup">
      <div className="popupPage">
        <div className="showInformation">
          <div className="poster">
            <img data-testid="showImage" src={popupShow.image? popupShow.image.medium: "none"} alt="" />
          </div>

          <div className="information">
            <div data-testid="showTitle" className="title">
              <h1>{popupShow && popupShow.name} ({popupShow.premiered && popupShow.premiered.substring(0, popupShow.premiered.indexOf('-'))})</h1>

              <div data-testid="closeButton" className="closeButton">
                <button onClick={closePopup}>X</button>
              </div>
            </div>
            <p data-testid="showSummary">{popupShow.summary && popupShow.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
            <div data-testid="showCast" className="cast">
              <h3 >Cast:</h3>
              <p>{cast && cast.map((c: any) => {return c.person.name + ", "})}</p>
            </div>
            <div data-testid="showGenre" className="genre">
              <h3>Genres:</h3>
              <p>{popupShow.genres && popupShow.genres.join(', ')}</p>
            </div>
            <div data-testid="showStatus" className="status">
              <h3>Status:</h3> 
              <p>{popupShow && popupShow.status}</p>
            </div>      
          </div>
        </div>    
          {seasons.map((season: any, index:number) => {
            return ([
            <Season index={index} key={index} season={season} />
            ])
          })} 
      </div>
    </div>
  )
}

export default Popup
