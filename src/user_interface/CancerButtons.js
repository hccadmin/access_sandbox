import React from 'react';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { getRisksAndRegs } from '../state/slices/cancersSlice';
import { initializeCancer } from '../state/slices/userSlice';
import { makeHashKey } from '../helpers/utilities';

const CancerButtons = ({ cancers }) => {
  const dispatch = useDispatch();

  const loadCancer = (e) => {
    const cancerHash = makeHashKey(e.target.innerText);
    dispatch(getRisksAndRegs(e.target.innerText));
    dispatch( initializeCancer({ cancer: cancerHash, name: e.target.innerText }));
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
