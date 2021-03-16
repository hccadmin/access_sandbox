import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCancers } from '../state/slices/cancersSlice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CancerButtons from './CancerButtons';
import UserInputs from './UserInputs';


const Step2Cancers = ({ uiCancers, selected, executeCosts, predictedIncs }) => {
  const dispatch = useDispatch();

  const cancers = useSelector( (state) => {
    return state.cancers.full;
  });

  const initCostCalc = () => {
    executeCosts();
  }

  if (Object.keys(cancers).length === 0) {
    dispatch( loadCancers() );
  }

  return (
    <Row>
      <Col md="3">
        <CancerButtons cancers={ uiCancers } />
      </Col>
      <Col md="9">
        { 
          !selected.hasOwnProperty("name") ? <p>Please select cancer</p> :
            <UserInputs selected={ selected } predictedIncs={ predictedIncs }/>
        }
      </Col>
      <Button onClick={ initCostCalc } size="lg">Calculate costs</Button>
    </Row>
  );
}

export default Step2Cancers;
