import React from 'react'
import { render, screen } from '@testing-library/react';
import CostResultHeader from '../CostResultHeader';
import { useTotalCostAssembler } from '../../hooks';

jest.mock('../../hooks', () => {
  return {
    useTotalCostAssembler: jest.fn()
  }
});


test('Should have 2 headers (cancer name, total cost) if view type is by cancer', () => {
  useTotalCostAssembler.mockReturnValueOnce({ name: "Test", cost: 1000 });
  const type = "By cancer";
  const cost = {
    name: "APL"
  };
  const crh = render(<CostResultHeader type={ type } cost={ cost } />);
  expect(crh.getByText(/apl/i)).toBeInTheDocument();
  expect(crh.getByText(/total cost: \$1000\.00/i)).toBeInTheDocument();
});


