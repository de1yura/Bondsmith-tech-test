import React from 'react';
import ReactDOM  from 'react-dom';
import TvList from '../TvList';
import type {Config} from '@jest/types';

import {render, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OpenPopup from '../../../../__mocks__/OpenPopup'
import show from '../../../../__mocks__/show'
it("renders TvList without crashing", ()=> {
  render(<TvList OpenPopup={OpenPopup} show={show}/>)
})

it("render TvList correctly", ()=>{
  const {getByTestId} = render(<TvList OpenPopup={OpenPopup} show={show}/>);
  expect(getByTestId('showImage').getAttribute('src')).toBe('show image url');
  expect(getByTestId('showName')).toHaveTextContent('jest test')
})

