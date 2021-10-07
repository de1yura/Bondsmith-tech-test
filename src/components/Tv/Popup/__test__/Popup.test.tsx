import React from 'react';
import Popup from '../Popup';
import {render, cleanup} from '@testing-library/react';
import data from '../../../../__mocks__/data';
import popupShow from '../../../../__mocks__/popupShow'

afterEach(()=>{
  cleanup();
})

it('Renders Popup without crashing', ()=> {
  render(<Popup data={data} popupShow={popupShow}/>);
})

it('recieves correct data', ()=> {
  expect(data).toStrictEqual([{season:1, number:1},{season:2, number:2},{season:2, number:3}]);
  expect(popupShow).toStrictEqual({
    image:{medium:"image url"},
    name: "jest test",
    premiered: "2021-10-07",
    summary: "blah blah blah",
    genres: ["one", "two", "three"],
    status: "ended",
  });
})

it('Renders Popup correctly and uses the data from mock files correctly', ()=> {
  const {getByTestId} = render(<Popup data={data} popupShow={popupShow}/>);
  expect(getByTestId('showImage').getAttribute("src")).toBe("image url");
  expect(getByTestId('showTitle')).toHaveTextContent('jest test');
  expect(getByTestId('closeButton')).toBeInTheDocument();
  expect(getByTestId('showSummary')).toHaveTextContent('blah blah blah');
  expect(getByTestId('showCast')).toHaveTextContent('Cast:');
  expect(getByTestId('showGenre')).toHaveTextContent('Genres:one, two, three');
  expect(getByTestId('showStatus')).toHaveTextContent('Status:ended');
})

