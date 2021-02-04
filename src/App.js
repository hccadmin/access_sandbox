import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initCostCalc } from './state/slices/costsSlice';
import { loadUI } from './state/slices/uiSlice';
import Container from 'react-bootstrap/Container';
import UserInterface from './user_interface/UserInterface';
import ResultsInterface from './results_interface/ResultsInterface';

const App = () => {
  const dispatch = useDispatch();

  const uiLabels = useSelector( (state) => {
    return state.ui;
  });

  const user = useSelector( (state) => {
    return state.user;
  });

  const regimens = useSelector( (state) => {
    return state.cancers.regimens;
  });

  const costList = useSelector( (state) => {
    return state.costs.list;
  });

  const loadAllCosts = () => {
    dispatch( initCostCalc({ user, regimens }));
  }

  const [visibility, setVisibility] = useState({ inputs: true, results: false });

  const selections = { 
    setting: user.setting,
    year: user.year
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
          costs={ costList }
          selections={ selections }
        />
      </>
    }
    </Container>
  );
}

export default App;
