import React from 'react'
import List from './List';
import { render, screen } from '@testing-library/react';

beforeEach( () => {
  render(<List />);
});

it("should render a list", () => {
  expect(screen.getByRole("list")).toBeVisible();
});

it("should render a list of 3 items", () => {
  expect(screen.getAllByRole("listitem").length).toBe(3);
});

