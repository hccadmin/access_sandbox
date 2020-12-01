import React from 'react';
import CancerSelector from './CancerSelector';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeEach( () => {
  const cancers = ["ALL", "AML", "Wilm's Tumor"];
  const getSelected = jest.fn().mockReturnValue("A cancer");
  render(
    <CancerSelector 
      cancers={ cancers } 
      setSelected={ getSelected }
    />
  );
});

it('should contain a label with the word "cancer" in it', () => {
  const label = screen.getByRole('label');
  expect(label).toBeInTheDocument();
  expect(label).toHaveTextContent(/cancer/i);
  //screen.debug();
});

it('should contain at select element', () => {
  expect(screen.getByRole('combobox')).toBeInTheDocument();
});

it('should contain at least one selection option', () => {
  expect(screen.getAllByRole('option').length).toBeGreaterThanOrEqual(1);
});

it('should show the first select item (ALL) is selected', () => {
  userEvent.selectOptions(screen.getByRole('combobox'), 'ALL');
  expect(screen.getByTestId("1").selected).toBe(true);
});
