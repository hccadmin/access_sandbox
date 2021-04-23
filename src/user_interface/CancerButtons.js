import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { getRisksAndRegs } from '../state/slices/cancersSlice';
import { makeHashKey } from '../helpers/utilities';
import { initializeCancer, setClicks } from '../state/slices/userSlice';
import { validateCancerInputs } from '../state/slices/validationSlice';

const CancerButtons = ({ cancers }) => {

  const [cancerDisplay, setCancerDisplay] = useState({ cancer: "", name: "", risks: {} });

  const dispatch = useDispatch();

  const cancersFull = useSelector( (state) => {
    return state.cancers.full;
  });

  const user = useSelector( (state) => {
    return state.user;
  });

  const hasErrors = useSelector( (state) => {
    return state.validation.hasErrors;
  });

  const getSelection = (cancerList, toFind) => {
    return cancerList.find( (cancer) => {
      return cancer.name === toFind;
    });
  }

  /*
  */
  useEffect( () => {
    if (!hasErrors && user.cancerButtonClicks > 0) {
      dispatch( initializeCancer({ ...cancerDisplay }) );
    }
  }, [user.cancerButtonClicks]);

  const loadCancer = (e) => {
    const selected = getSelection(cancersFull, e.target.innerText);
    const cancerHash = makeHashKey(selected.name);
    const cancerObj = {
      cancer: cancerHash,
      name: selected.name,
      risks: selected.risk_strats
    };
    if (user.initialized) {
      dispatch( validateCancerInputs({ ...user }));
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
            block 
            variant="outline-secondary" 
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
