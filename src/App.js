import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initCostCalc, getCostsByType  } from './state/slices/costsSlice';
import { loadUI } from './state/slices/uiSlice';
import Container from 'react-bootstrap/Container';
import UserInterface from './user_interface/UserInterface';
import ResultsInterface from './results_interface/ResultsInterface';

const App = () => {
  const [visibility, setVisibility] = useState({ inputs: true, results: false });

  const dispatch = useDispatch();

  const uiLabels = useSelector( (state) => {
    return state.ui;
  });

  const user = useSelector( (state) => {
    return state.user;
  });

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const regimens = useSelector( (state) => {
    return state.cancers.regimens;
  });

  const costs = useSelector( (state) => {
    return state.costs.costs;
  });

  const prices = useSelector( (state) => {
    return state.prices.filtered;
  });

  const loadAllCosts = () => {
    dispatch( initCostCalc({ setting, user, regimens, prices }));
  }

  const loadCostsByType = (type) => {
    dispatch( getCostsByType(type));
  }

  const selections = { 
    setting: setting.name,
    year: setting.year,
    diagType: setting.diagType
  }

  if ( uiLabels.cancers.length === 0) {
    dispatch(loadUI());
  }

  return (
    <Container>
      <h1>Access Forecast</h1>
    { visibility.inputs ? 
      <>
        <UserInterface 
          setVisible={ setVisibility } 
          loadAllCosts={ loadAllCosts }
          uiLabels={ uiLabels }
        />
      </>
      :
      <>
        <ResultsInterface 
          setVisible={ setVisibility } 
          costs={ costs }
          selections={ selections }
          loadCostsByType={ loadCostsByType }
        />
      </>
    }
    </Container>
  );
}

export default App;
