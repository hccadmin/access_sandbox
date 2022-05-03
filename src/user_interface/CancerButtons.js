import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { getRisksAndRegs } from '../state/slices/cancerDataSlice';
import { makeHashKey } from '../helpers/utilities';
import { initializeCancer, setClicks } from '../state/slices/cancerSelectionsSlice';
import { validateCancerInputs } from '../state/slices/validationSlice';
import { setNavigation } from '../state/slices/navigationSlice';

const CancerButtons = ({ cancers, settingType }) => {

  const { REACT_APP_SETTING_SIMPLE, REACT_APP_SETTING_COMPLEX } = process.env;
  const [cancerDisplay, setCancerDisplay] = useState({ cancer: "", name: "", ref: "", risks: {} });

  const dispatch = useDispatch();

  const cancersFull = useSelector( (state) => {
    return state.cancerData.full;
  });

  const cancerSelections = useSelector( (state) => {
    return state.cancerSelections;
  });

  const hasErrors = useSelector( (state) => {
    return state.validation.hasErrors;
  });

  const navigation = useSelector( (state) => {
    return state.navigation;
  });

  const getSelection = (cancerList, toFind) => {
    return cancerList.find( (cancer) => {
      return cancer.name === toFind;
    });
  }

  /*
  */
  useEffect( () => {
    if (!hasErrors && cancerSelections.cancerButtonClicks > 0 
        && !navigation.staticPage && !navigation.settingReset) {
      dispatch( initializeCancer({ ...cancerDisplay }) );
    }
  }, [cancerSelections.cancerButtonClicks]);

  const loadCancer = (e) => {
    const selected = getSelection(cancersFull, e.target.innerText);
    const cancerHash = makeHashKey(selected.name);
    const cancerObj = {
      cancer: cancerHash,
      name: selected.name,
      ref: selected.reg_ref,
      risks: selected.risk_strats
    };
    if (cancerSelections.initialized) {
      dispatch( setNavigation({ settingReset: false }) );
      if (settingType !== REACT_APP_SETTING_COMPLEX) {
        dispatch( validateCancerInputs({ ...cancerSelections }));
      }
      if (navigation.staticPage) {
        dispatch( setNavigation({ staticPage: false }));
      }
    }
    else {
      dispatch( initializeCancer({ ...cancerObj }));
    }
    dispatch( setClicks(1) );
    setCancerDisplay({ ...cancerObj });
  }

  return (
    <ButtonGroup vertical>
      { cancers.map( (cancer, i) => {
        return (
          <Button 
            active={ cancerSelections.selected.name === cancer }
            block 
            name={ i }
            variant="outline-info" 
            key={ i } 
            onClick={ loadCancer }
          >
              { cancer }
          </Button>
        );
      })}
    </ButtonGroup>
  );
}

export default CancerButtons;
