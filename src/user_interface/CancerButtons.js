import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { getRisksAndRegs } from '../state/slices/cancersSlice';
import { makeHashKey } from '../helpers/utilities';
import { initializeCancer } from '../state/slices/userSlice';

const CancerButtons = ({ cancers }) => {
  const dispatch = useDispatch();

  const cancersFull = useSelector( (state) => {
    return state.cancers.full;
  });

  const getSelection = (cancerList, toFind) => {
    return cancerList.find( (cancer) => {
      return cancer.name === toFind;
    });
  }

  const loadCancer = (e) => {
    const selected = getSelection(cancersFull, e.target.innerText);
    const cancerHash = makeHashKey(selected.name);
    dispatch( initializeCancer({
      cancer: cancerHash,
      name: selected.name,
      risks: selected.risk_strats
    }) );
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
