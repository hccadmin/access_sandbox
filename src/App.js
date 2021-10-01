import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initCostCalc, getCostsByType  } from './state/slices/costsSlice';
import { loadUI } from './state/slices/uiSlice';
import Container from 'react-bootstrap/Container';
import Layout from './shared_components/Layout';
import Header from './shared_components/Header';
import UserInterface from './user_interface/UserInterface';
import ResultsInterface from './results_interface/ResultsInterface';
import text from './text/global';

const App = () => {
  const [visibility, setVisibility] = useState({ inputs: true, results: false });

  const dispatch = useDispatch();

  const uiLabels = useSelector( (state) => {
    return state.ui;
  });

  const cancerSelections = useSelector( (state) => {
    return state.cancerSelections;
  });

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const regimens = useSelector( (state) => {
    return state.cancerData.regimens;
  });

  const costs = useSelector( (state) => {
    return state.costs.costs;
  });

  const prices = useSelector( (state) => {
    return state.prices;
  });

  const loadAllCosts = () => {
    dispatch( initCostCalc({ setting, cancers: cancerSelections.cancers, regimens, prices }));
  }

  const loadCostsByType = (type) => {
    dispatch( getCostsByType(type));
  }

  if ( uiLabels.cancers.length === 0) {
    dispatch(loadUI());
  }

  return (
    <Layout>
      <Header />
        <Container>
          <h1>Access Forecast</h1>
          <p className="lead">{ text.siteDescription }</p>
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
              loadCostsByType={ loadCostsByType }
            />
          </>
        }
        </Container>
    </Layout>
  );
}

export default App;
