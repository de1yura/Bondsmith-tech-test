import React from 'react';
import ReactDOM  from 'react-dom';

import App from '../App';
import {render} from '@testing-library/react';
import OpenPopup from '../__mocks__/OpenPopup'



it('renders app', ()=>{
  render(<App />)
})

it('should retrieve seasons with episodes same as that in the mock file', ()=> {
  OpenPopup(1).then((season: any) => {
    expect(season).toBe([{season:1, number:1},{season:2, number:2},{season:2, number:3}])
  })
})