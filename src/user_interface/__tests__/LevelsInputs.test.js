import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LevelsInputs from '../LevelsInputs';

const mockStore = configureStore();
const store = mockStore({ setting: { levels: { modeled: [], custom: [] } } });

test('Should render the LevelsInputs component with heading', () => {
  render(
    <Provider store={ store }>
      <LevelsInputs defaults={ [] }>
        This is the LevelsInputs heading
      </LevelsInputs>
    </Provider>
  );
  expect( screen.getByRole('heading', { name: /this is the levelsinputs heading/i }) ).toBeInTheDocument();
});

test('Should render the LevelsInputs component with 3 levels and percentages', () => {
  const percentages = [20, 30, 50];
  render(
    <Provider store={ store }>
      <LevelsInputs
        defaults={ percentages }
      />
    </Provider>
  );
  const levels = screen.getAllByText(/level\ [0-9]/i);
  expect(levels.length).toEqual(3);
  percentages.forEach( (perc) => {
    expect( screen.getByText(new RegExp(`${ perc }%`))).toBeInTheDocument();
  });
});

test('Should capture input values', () => {
});
