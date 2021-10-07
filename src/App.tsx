import React, {useEffect, useState} from 'react';
import './App.css';
import Tv from './components/Tv/TvList/TvList';
import Popup from './components/Tv/Popup/Popup';
import Navbar from './components/Navbar/Navbar'
import axios from 'axios';

function App() {

  // States
  const [tvs, setTvs] = useState<any[]>([]);

  const [selected, setSelected] = useState(()=> {
    const localSelected = localStorage.getItem('selected');
    return localSelected? JSON.parse(localSelected) : [];
  });

  const [search, setSearch] = useState(()=> {
    const localData = localStorage.getItem('search');
    return localData ? localData : "";
  });

  const [apikey, setApikey] = useState<string>(()=> {
    const localSearch = "https://api.tvmaze.com/search/shows?q=" + search;
    return search ? localSearch : "https://api.tvmaze.com/schedule?country=GB" 
  });

  const [id, setId] = useState(()=> {
    const localId = localStorage.getItem('id');
    return localId? Number(localId) : 1;
  })

   // Landing page of shows on today in the UK 
   useEffect(() => {
    fetch(apikey)
    .then((response) => response.json())
    .then(data => {
      setTvs(data)
    })
  }, [apikey])


  // Search handler
  const handleInput = (e: any) => {
    setSearch(e.target.value)
    setApikey("https://api.tvmaze.com/search/shows?q=" + e.target.value)
    
  }
  useEffect(()=> {
    localStorage.setItem('search', search)
  }, [search]);



  // Popup the Shows' information and episodes FOR UPDATE FOCUS ON LINE 46
  const OpenPopup = (id: number):void => {
    let newAPI = "https://api.tvmaze.com/shows/" + id + "/episodes";
    setId(id);
    axios(newAPI)
    .then(({data}) => {
      setSelected(data);
    })
  }
  
  useEffect(()=> {
    localStorage.setItem('id', String(id))
  }, [id]);
  useEffect(()=> {
    localStorage.setItem('selected', JSON.stringify(selected))
  }, [selected]);

  const closePopup = () => {
    setSelected([]);
    setId(1);
  }

  // Current information of show in popup
  const [popupShow, setPopupShow] = useState<any[]>([]); 
  const [cast, setCast] = useState<any[]>([]);

  useEffect(()=> {
    fetch("https://api.tvmaze.com/shows/" + String(id))
    .then((response) => response.json())
    .then(data => {
      setPopupShow(data)    
    })
  }, [id])

  //Cast information in seperate api
  useEffect(()=> {
    fetch("https://api.tvmaze.com/shows/"+ String(id) + "/cast")
    .then((response) => response.json())
    .then(data => {
      setCast(data)    
    })
  }, [id])
  

  return (
    <div className="landing">
      <Navbar handleInput={handleInput} search={search} closePopup={closePopup}/>
      <div className="showList">
        {tvs && tvs.map((tv)=> 
        <Tv key={tv.id? tv.id: tv.show.id} {...tv} OpenPopup={OpenPopup}/>
      )}
      </div>
      { selected.length  ? <Popup popupShow={popupShow} cast={cast} data={selected} closePopup={closePopup} /> : false}
    </div>
  );
}

export default App;
