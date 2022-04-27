import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initCostCalc, getCostsByType  } from './state/slices/costsSlice';
import { setLoading } from './state/slices/loadingSlice';
import { setNavigation } from './state/slices/navigationSlice';
import { loadUI } from './state/slices/uiSlice';
import Layout from './shared_components/Layout';
import Header from './shared_components/Header';
import LoadingSpinner from './shared_components/LoadingSpinner';
import UserInterface from './user_interface/UserInterface';
import ResultsInterface from './results_interface/ResultsInterface';
import text from './text/global';

const Tool = () => {
  //const [visibility, setVisibility] = useState({ inputs: true, results: false });

  const dispatch = useDispatch();

  const isLoading = useSelector( (state) => {
    return state.loading.isLoading;
  });

  const resultsCalculated = useSelector( (state) => {
    return state.navigation.results;
  });

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

  const loadAllCosts = async () => {
    dispatch( setLoading(true));
    //console.log("Setting:", setting);
    //console.log("Cancers:", cancerSelections.cancers);
    //console.log("Regimens:", regimens);
    //console.log("Prices:", prices);
    const res = await dispatch( initCostCalc({ setting, cancers: cancerSelections.cancers, regimens, prices }));
    if (res.meta.requestStatus === "fulfilled") {
      dispatch( setLoading(false));
    }
  }

  const loadCostsByType = async (type) => {
    dispatch( setLoading(true) );
    const res = await dispatch( getCostsByType(type));
    if (res.meta.requestStatus === "fulfilled") {
      dispatch( setLoading(false));
    }
  }

  const setVisibility = (visible) => {
    dispatch( setNavigation({ results: visible }));
  }

  if ( uiLabels.cancers.length === 0) {
    dispatch(loadUI()).then( (res) => {
      dispatch( setLoading(false));
    });
  }

  return (
    <>
      <LoadingSpinner showLoad={ isLoading } />
      { !resultsCalculated ? 
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
    </>
  );
}

export default Tool;
