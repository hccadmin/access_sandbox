import React from 'react';
import { screen, render } from '@testing-library/react';
import StaticTitle from '../StaticTitle';

beforeEach( () => {
  render(
    <StaticTitle
      heading="Country"
      text="Argentina"
    />
  );
});

test('it should display the word "Country" in the title', () => {
  expect(screen.getByRole('heading')).toHaveTextContent(/^country$/i);
});

test('it should display the country "Argentina" in the text area', () => {
  expect(screen.getByText(/^argentina$/i)).toBeInTheDocument();
});

