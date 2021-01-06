import React from 'react';
import { screen, render } from '@testing-library/react';
import UserInputs from '../UserInputs';

const cancersOnly = ["ALL", "AML", "APL"];
const cancersFull = [
  { cancer: "ALL", risk_strats: [] },
  { cancer: "AML", risk_strats: [] },
  { cancer: "APL", risk_strats: [] }
];

beforeEach( () => {
  render(
    <UserInputs
      cancersOnly={ cancersOnly }
      cancersFull={ cancersFull }
    />
  );
});

test('it should display three cancer buttons', () => {
  // Test
});
