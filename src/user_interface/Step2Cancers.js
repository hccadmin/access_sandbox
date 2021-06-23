import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCancers } from '../state/slices/cancersSlice';
import { initializeAllCancers } from '../state/slices/userSlice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CancerButtons from './CancerButtons';
import CancerInputs from './CancerInputs';
import { makeHashKey } from '../helpers/utilities';


const Step2Cancers = ({ uiCancers, selected, setting }) => {
  const { REACT_APP_SETTING_SIMPLE, REACT_APP_SETTING_COMPLEX } = process.env;
  const dispatch = useDispatch();

  const { type, incidences } = setting;
  const cancerHash = makeHashKey(selected.name);
  const predictedIncs = incidences[cancerHash];

  const cancers = useSelector( (state) => {
    return state.cancers.full;
  });

  useEffect( () => {
    if (Object.keys(cancers).length === 0) {
      dispatch( loadCancers() ).then( (result) => {
        if (type === REACT_APP_SETTING_COMPLEX && Object.keys(incidences).length > 0) {
          dispatch( initializeAllCancers({ cancers: result.payload.full, incidences }) );
        }
      });
    }
  }, [cancers, incidences, dispatch]);

  return (
    <Row>
      <Col md="3">
        <CancerButtons 
          cancers={ uiCancers }
          settingType={ type }
        />
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
