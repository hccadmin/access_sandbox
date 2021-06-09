import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CancerIncidence from '../CancerIncidence';

let 
  type = "",
  predictedIncs = { total: "" },
  handleIncidence = jest.fn(),
  saved = "",
  cancer = 'all';

const mockStore = configureStore();
const store = mockStore({ validation: { incidence: "" } });

test('Should render the CancerIncidence component', () => {
  render(<Provider store={ store }>
    <CancerIncidence
      type={ type }
      predictedIncs={ predictedIncs }
      handleIncidence={ handleIncidence }
      saved={ saved }
      cancer={ cancer }
    />
    </Provider>);
  expect( screen.getByLabelText(/incidence/i) ).toBeInTheDocument();
});


test('Should show text input only for Single Institute setting', () => {
  type = "Single institution"
  render(<Provider store={ store }>
    <CancerIncidence
      type={ type }
      predictedIncs={ predictedIncs }
      handleIncidence={ handleIncidence }
      saved={ saved }
      cancer={ cancer }
    />
    </Provider>);
  expect( screen.getByRole('spinbutton', { name: /incidence/i }) ).toBeInTheDocument();
  expect( screen.queryByRole('group', { name: /user override buttons/i }) ).toBeNull();
});

test('Should show button toggle (modeled/custom) for Health System setting', () => {
  type = "Health system";
  predictedIncs.total = 50;
  render(<Provider store={ store }>
    <CancerIncidence
      type={ type }
      predictedIncs={ predictedIncs }
      handleIncidence={ handleIncidence }
      saved={ saved }
      cancer={ cancer }
    />
    </Provider>);
  expect( screen.queryByRole('spinbutton', { name: /incidence/i }) ).toBeNull();
  expect( screen.getByRole('group', { name: /user override buttons/i }) ).toBeInTheDocument();
  expect( screen.getByText(/modeled incidence: 50/i) ).toBeInTheDocument();
});
