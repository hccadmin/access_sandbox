import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInitializeAllCancers } from '../hooks';
import { loadCancers } from '../state/slices/cancerDataSlice';
import { initializeAllCancers } from '../state/slices/cancerSelectionsSlice';
import { setLoading } from '../state/slices/loadingSlice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CancerButtons from './CancerButtons';
import CancerInputs from './CancerInputs';
import { makeHashKey } from '../helpers/utilities';


const Step2Cancers = ({ uiCancers, selected, setting, setComplete }) => {
  const { REACT_APP_SETTING_SIMPLE, REACT_APP_SETTING_COMPLEX } = process.env;
  const dispatch = useDispatch();
  const { type, typeHash, incidences } = setting;
  const cancerHash = makeHashKey(selected.name);
  const predictedIncs = incidences[cancerHash];

  const cancerData = useSelector( (state) => {
    return state.cancerData.full;
  });

  const cancerSelections = useSelector( (state) => {
    return state.cancerSelections;
  });

  const shouldInitializeAll = useInitializeAllCancers();

  useEffect( () => {
    if (Object.keys(cancerData).length === 0) {
      dispatch( setLoading(true) );
      dispatch( loadCancers() ).then( (result) => {
        dispatch( setLoading(false) );
        setComplete(true);
        const loaded = result.payload.full;
        if ( shouldInitializeAll(type, loaded, incidences) ) {
          dispatch( initializeAllCancers({ cancers: loaded, incidences }) );

        }
        /*
        */
      });
    }
    if (cancerSelections.initialized) {
      setComplete(true);
    }
  }, [cancerData, incidences, dispatch, cancerSelections.initialized]);

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
              settingHash={ typeHash }
              predictedIncs={ predictedIncs }
            />
        }
      </Col>
    </Row>
  );
}

export default Step2Cancers;
