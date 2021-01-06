import React from 'react';
import { screen, render } from '@testing-library/react'
import CancerButtons from '../CancerButtons';

const cancers = ["ALL", "AML", "APL"]
beforeEach( () => {
  render(<CancerButtons cancers={ cancers } />);
});

it('should display 3 buttons', () => {
  expect(screen.getAllByRole('button').length).toEqual(3); 
});
