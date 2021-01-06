import React from 'react';
import { screen, render } from '@testing-library/react'
import App from '../App';

it('displays the title "Access Forecast"', () => {
  render(<App />);
  expect(screen.getByText(/^access forecast$/i)).toBeInTheDocument();
});
