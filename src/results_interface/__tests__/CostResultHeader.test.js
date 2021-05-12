import React from 'react'
import { render, screen } from '@testing-library/react';
import CostResultHeader from '../CostResultHeader';
/*
import { useTotalCostAssembler } from '../../hooks';

jest.mock('../../hooks', () => {
  return {
    useTotalCostAssembler: jest.fn()
  }
});
*/


test('Should have 2 headers (cancer name, total cost) if view type is by CANCER', () => {
  const type = "By cancer";
  const cost = {
    name: "APL",
    totals: { med: 1000 }
  };
  const crh = render(<CostResultHeader type={ type } cost={ cost } />);
  expect(crh.getByText(/apl/i)).toBeInTheDocument();
  expect(crh.getByText(/total cost: \$1000\.00/i)).toBeInTheDocument();
});

test('Should have 3 headers (cancer name, total dosage, total cost) if view type is by DRUG', () => {
  /*
  useTotalCostAssembler.mockReturnValueOnce({ name: "Test", cost: 1000 });
  */
  const type = "By drug";
  const cost = {
    name: "APL",
    totals: {
      med: 1000,
      dosage: 1000
    }
  };
  const crh = render(<CostResultHeader type={ type } cost={ cost } />);
  expect(crh.getByText(/apl/i)).toBeInTheDocument();
  expect(crh.getByText(/total volume: 1000\.00/i)).toBeInTheDocument();
  expect(crh.getByText(/total cost: \$1000\.00/i)).toBeInTheDocument();
});


describe('Total cost help text descriptions', () => {
  let type = "", cost = { totals: {} };
    
  test('Cancer, No price overrides, "Modeled pricing only"', () => {
    type = "By cancer";
    cost.totals.med = 1000;

    const crh = render(<CostResultHeader type={ type } cost={ cost } />);
    expect(crh.getByText(/total cost: \$1000\.00/i)).toBeInTheDocument();
    expect(crh.getByText(/modeled pricing only/i)).toBeInTheDocument();
  });

  test('Drug, override, "Custom pricing only"', () => {
    type = "By drug";
    cost.totals.override = 5000;
    cost.totals.med = 1000;
    cost.totals.dosage = 1000;

    const crh = render(<CostResultHeader type={ type } cost={ cost } />);
    expect(crh.getByText(/total cost: \$5000\.00/i)).toBeInTheDocument();
    expect(crh.getByText(/total volume: 1000\.00/i)).toBeInTheDocument();
    expect(crh.getByText(/custom pricing only/i)).toBeInTheDocument();
  });

  test('Cancer, override, "Modeled and custom combined pricing"', () => {
    type = "By cancer";
    cost.totals.override = 5000;
    cost.totals.med = 1000;
    cost.totals.medAndUser = 7000;

    const crh = render(<CostResultHeader type={ type } cost={ cost } />);
    expect(crh.getByText(/total cost: \$7000\.00/i)).toBeInTheDocument();
    expect(crh.getByText(/modeled and custom combined pricing/i)).toBeInTheDocument();
  });
});
