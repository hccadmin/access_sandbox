import React from 'react';
import { screen, render } from '@testing-library/react';
import UserInterface from '../UserInterface';

test('it should show temporary static inputs', () => {
  render(<UserInterface />);
  expect(screen.getByRole('heading')).toHaveTextContent(/^Temporary static inputs$/i);
});

