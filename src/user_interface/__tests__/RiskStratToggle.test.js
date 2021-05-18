import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import RiskStratToggle from '../RiskStratToggle';

let 
  riskStrat = { name: "", percent_total: "" }, 
  validation = { risks: {} },
  saved = "", 
  custom ="";

/*
*/
test('Should render the "percent_total" prop value if custom flag set to "false"', () => {
  custom = false;
  riskStrat.percent_total = "60";
  render(
    <RiskStratToggle 
      num={ 0 }
      custom={ custom }
      riskStrat={ riskStrat }
      setRiskPercentage={ jest.fn() }
      saved={ saved }
    />
  );
  const defaultPercent = screen.getByText('60%');
  expect(defaultPercent).toBeInTheDocument();
});

test('Should render an empty input area if custom flag set to "true"', () => {
  custom = true;
  render(
    <RiskStratToggle 
      num={ 0 }
      custom={ custom }
      riskStrat={ riskStrat }
      setRiskPercentage={ jest.fn() }
      saved={ saved }
    />
  );
  const customPercent = screen.getByRole('spinbutton', { name: /custom risk 0/i });
  expect(customPercent).toBeInTheDocument();
});

/*
test('Should show error message if validation fails', () => {
  custom = true;
  render(
    <RiskStratToggle 
      isInvalid={ false }
      num={ 0 }
      custom={ custom }
      riskStrat={ riskStrat }
      setRiskPercentage={ jest.fn() }
      saved={ saved }
    />
  );
  expect( screen.getByText(/please enter a risk percentage/i) ).not.toBeVisible();
});
*/


