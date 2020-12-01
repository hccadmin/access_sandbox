import React from 'react';
import { render, screen } from '@testing-library/react';
import ListModule from './ListModule';

beforeEach( () => {
  const list = ["item"];
  render(
    <ListModule 
      heading="Test" 
      list={ list }
    />
  );
});

it('should have a title', () => {
  expect(screen.getByRole('heading')).toBeInTheDocument();
  //screen.debug();
});

it('should have a list', () => {
  expect(screen.getByRole('list')).toBeInTheDocument();
});

it('should have a list with at least one item', () => {
  expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(1);
});
