import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import UserOverrideToggle from '../UserOverrideToggle';

//const mockStore = configureStore();
//const store = mockStore({ setting: { levels: { modeled: [], custom: [] } } });

test('Should render the component', () => {
  render(<UserOverrideToggle />);
  const 
  expect( screen.getByRole('heading', { name: /this is the levelsinputs heading/i }) ).toBeInTheDocument();
});
/*
test('Should not display any errors by default', () => {
  render(
    <Provider store={ store }>
      <LevelsInputs defaults={ [] }>
        This is the LevelsInputs heading
      </LevelsInputs>
    </Provider>
  );
  expect( screen.getByRole('heading', { name: /this is the levelsinputs heading/i }) ).toBeInTheDocument();
});
*/
