import React from 'react';
import ReactDOM  from 'react-dom';
import Navbar from '../Navbar';

import {render, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

afterEach(()=>{
  cleanup();
})

it("render Navbar without crashing", ()=> {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div)
})

it("renders Navbar correctly", () => {
  const {getByTestId} = render(<Navbar />)

  expect(getByTestId('mediaSearch')).toHaveTextContent("Media Search")
  expect(getByTestId('title')).toHaveTextContent("Sav State")

  const searchBox = screen.getByTestId('search')
  expect(searchBox).toBeInTheDocument();

  const input = screen.getByTestId('input')
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("type", "text")
})

it('inputs correctly into the search field', ()=> {
  render(<Navbar />);
  const input = screen.getByTestId('input');
  userEvent.type(input, "batman");
  expect(screen.getByTestId('input')).toHaveValue("batman")
})

