import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInitializeAllCancers } from '../hooks';
import { setSettingInput, loadIncidencesAndBsa } from '../state/slices/settingSlice';
import { initializeAllCancers, resetAllInitializedCancers } from '../state/slices/cancerSelectionsSlice';
import { allFieldsFilled } from '../helpers/utilities';
import ForecastToggle from './ForecastToggle';
import SettingInputs from './SettingInputs';

const Step1Setting = ({ uiLabels, setComplete }) => {
  const dispatch = useDispatch();

  const { REACT_APP_SETTING_SIMPLE, REACT_APP_SETTING_COMPLEX } = process.env;

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const cancerData = useSelector( (state) => {
    return state.cancerData.full;
  });

  const cancerSelections = useSelector( (state) => {
    return state.cancerSelections;
  });

  const { name, year, type, diagType, incidences } = setting;

  const shouldInitializeAll = useInitializeAllCancers();

  useEffect( () => {
    if (allFieldsFilled(name, type, year, diagType)) {
      setComplete(true);
      dispatch( loadIncidencesAndBsa({
        name, type, year, diagType
      })).then( (result) => {
        const incidences = result.payload.incidences;
        if ( shouldInitializeAll(type, cancerData, incidences) ) {
          dispatch( initializeAllCancers({ cancers: cancerData, incidences }) );
        }
      });
    }
  }, [name, type, year, diagType, dispatch]);

  const settingsKeyVal = {
    health_systems: {
      buttonText: REACT_APP_SETTING_COMPLEX,
      label: "geographical area",
      next: "subtype",
    },
    countries: {
      buttonText: REACT_APP_SETTING_SIMPLE,
      label: "country",
      selectName: "name"
    }
  };

  const handleSettingInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const input = { name, value, reset: false };
    if (name === "type") {
      input.reset = true;
      if (cancerSelections.allCancersInitialized) {
        dispatch( resetAllInitializedCancers() );
      }
    }
    dispatch( setSettingInput(input) );
    /*
    */
  }

  return (
    <>
      <ForecastToggle 
        extraClass="setting-toggle"
        name="type"
        labels={ Object.keys(settingsKeyVal).map( setting => settingsKeyVal[setting].buttonText) } 
        handleChange={ handleSettingInput } 
        saved={ setting.type }
      />
      <SettingInputs 
        keyVals={ settingsKeyVal }
        selected={ setting.type } 
        uiLabels={ uiLabels }
        setOption={ handleSettingInput } 
      /> 
    </>
  );
}

export default Step1Setting;
