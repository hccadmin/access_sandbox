import React from 'react';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getRisksAndRegs } from '../state/cancersSlice';

const CancerButtons = ({ cancers }) => {
  const dispatch = useDispatch();

  const loadCancer = (e) => {
    dispatch(getRisksAndRegs(e.target.innerText));
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
