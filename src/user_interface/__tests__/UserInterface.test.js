import React from 'react';
import { screen, render, within } from '@testing-library/react';
import UserInterface from '../UserInterface';

test('it should show 3 static title components', () => {
  render(<UserInterface />);
  const header = screen.getByRole('header');
  expect(within(header).getAllByRole('heading').length).toEqual(3);
});

