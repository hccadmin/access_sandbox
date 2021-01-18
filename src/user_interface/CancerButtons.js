import React from 'react';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getRisksAndRegs } from '../state/slices/cancersSlice';
import { initializeCancer } from '../state/slices/userSlice';
import { makeHashKey } from '../helpers/utilities';

const CancerButtons = ({ cancers }) => {
  const dispatch = useDispatch();

  const loadCancer = (e) => {
    const cancerHash = makeHashKey(e.target.innerText);
    dispatch(getRisksAndRegs(e.target.innerText));
    dispatch( initializeCancer(cancerHash));
  }

  return (
    cancers.map( (cancer, i) => {
      return (
        <Button 
          block 
          variant="secondary" 
          key={ i } 
          size="lg"
          onClick={ loadCancer }
        >
            { cancer }
        </Button>
      );
    })
  );
}

export default CancerButtons;
