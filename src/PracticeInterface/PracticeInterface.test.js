import React from 'react';
import { render, screen } from '@testing-library/react';
import PracticeInterface from "./PracticeInterface";

beforeEach( () => {
  let cancers = [];
  render(
    <PracticeInterface 
      cancers={ cancers } 
    />
  );
});

it('should have a heading', () => {
  expect(screen.getByRole('heading')).toBeInTheDocument();
});
