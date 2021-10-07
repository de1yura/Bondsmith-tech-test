import React from 'react'
import './Navbar.css'

interface NavProps {
  handleInput?(e: any): any;
  search?: string;
  closePopup?(): any;
}

const Nav = ({handleInput, search, closePopup}: NavProps) => {
  return (
  <>
    <div data-testid="mediaSearch" className="mediaSearch">
        <h3>Media Search</h3>
    </div>

    <div data-testid="navbar" className="navbar">
        <div data-testid="title" className="title">
          <h1>Sav State</h1>
        </div>

        <div data-testid="search" className="search">
          <input data-testid="input" type="text" placeholder="search for a series..." value={search} className="searchbox" onChange={handleInput} onClick={closePopup}/>
        </div>
    </div>
  </>  
  )
}

export default Nav
