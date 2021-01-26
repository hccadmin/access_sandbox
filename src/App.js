import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadAllCostData } from './state/slices/costsSlice';
import Container from 'react-bootstrap/Container';
import UserInterface from './user_interface/UserInterface';
import ResultsInterface from './results_interface/ResultsInterface';

const App = () => {
  const dispatch = useDispatch();

  const setting = useSelector( (state) => {
    return state.setting;
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
    dispatch( loadAllCostData({ setting, user, regimens }));
  }

  const [visibility, setVisibility] = useState({ inputs: true, results: false });

  const selections = { 
    setting: setting.name,
    year: setting.year
  }

  return (
    <Container>
      <h1>Access Forecast</h1>
      <UserInterface 
        visible={ visibility.inputs } 
        setVisible={ setVisibility } 
        loadAllCosts={ loadAllCosts }
      />
      <ResultsInterface 
        visible={ visibility.results } 
        setVisible={ setVisibility } 
        costs={ costList }
        cancers={ user }
        selections={ selections }
      />
    </Container>
  );
}

export default App;
