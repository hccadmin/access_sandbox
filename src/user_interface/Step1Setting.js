import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSettingInput, loadIncidencesAndBsa } from '../state/slices/settingSlice';
import SettingButtons from './SettingButtons';
import SettingInputs from './SettingInputs';

const Step1Setting = ({ uiLabels, setComplete }) => {
  const dispatch = useDispatch();

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const { name, year, type, diagType, incidences } = setting;


  const allFieldsFilled = (...arr) => {
    return arr.every( (val) => {
      return val.length > 0;
    });
  }

  useEffect( () => {
    if (allFieldsFilled(name, type, year, diagType)) {
      setComplete(true);
      dispatch(loadIncidencesAndBsa({
        name, type, year, diagType
      }));
    }
      /*
      */
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
      <SettingButtons 
        names={ Object.keys(settingsKeyVal).map( setting => settingsKeyVal[setting].buttonText) } 
        setSettingType={ handleSettingInput } 
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
