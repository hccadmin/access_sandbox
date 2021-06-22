import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSettingInput, loadIncidencesAndBsa } from '../state/slices/settingSlice';
import { initializeAllCancers } from '../state/slices/userSlice';
import { allFieldsFilled } from '../helpers/utilities';
import ForecastToggle from './ForecastToggle';
import SettingInputs from './SettingInputs';

const Step1Setting = ({ uiLabels, setComplete }) => {
  const dispatch = useDispatch();

  const { REACT_APP_SETTING_SIMPLE, REACT_APP_SETTING_COMPLEX } = process.env;

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const { name, year, type, diagType } = setting;

  useEffect( () => {
    if (allFieldsFilled(name, type, year, diagType)) {
      setComplete(true);
      if (type === REACT_APP_SETTING_COMPLEX) {
        console.log("HEALTH SYSTEM");
      }
      dispatch(loadIncidencesAndBsa({
        name, type, year, diagType
      }));
    }
  }, [name, type, year, diagType]);

  const settingsKeyVal = {
    health_systems: {
      buttonText: "Health system",
      label: "geographical area",
      next: "subtype",
    },
    countries: {
      buttonText: "Single institution",
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
