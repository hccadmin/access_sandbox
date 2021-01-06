import React from 'react';
import { screen, render } from '@testing-library/react'
import { Regimen, RiskStrat, Cancer } from '../models';
import App from '../App';

beforeEach( () => {
  render(<App />);
});

it('should show a list of cancers', async () => {
  expect( await screen.findByRole('list')).toBeInTheDocument();
});

const getRegimens = () => {
  return [
    new Regimen('Regimen 1'),
    new Regimen('Regimen 2'),
    new Regimen('Regimen 3')
  ];
}

const getRiskStrats = () => {
  return [
    new RiskStrat('Risk strat 1'),
    new RiskStrat('Risk strat 2'),
    new RiskStrat('Risk strat 3')
  ];
}

const getCancers = () => {
  return [
    new Cancer('Cancer 1'),
    new Cancer('Cancer 2'),
    new Cancer('Cancer 3')
  ];
}
