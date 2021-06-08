import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCancers } from '../state/slices/cancersSlice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CancerButtons from './CancerButtons';
import CancerInputs from './CancerInputs';
import { makeHashKey } from '../helpers/utilities';


const Step2Cancers = ({ uiCancers, selected, setting }) => {
  const dispatch = useDispatch();

  const { type, incidences } = setting;
  const cancerHash = makeHashKey(selected.name);
  const predictedIncs = incidences[cancerHash];

  const cancers = useSelector( (state) => {
    return state.cancers.full;
  });

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
          !selected.hasOwnProperty("name") ? <p></p> :
            <CancerInputs 
              selected={ selected } 
              settingType={ type }
              predictedIncs={ predictedIncs }
            />
        }
      </Col>
    </Row>
  );
}

export default Step2Cancers;
