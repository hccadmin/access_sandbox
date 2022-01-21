import React from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import UserOverrideToggle from './user_override_toggle/UserOverrideToggle';
import MarkupJSON from '../shared_components/MarkupJSON';
import HelpTextModal from '../shared_components/HelpTextModal';
import stepTerms from './text/steps';
import { setIncidence } from '../state/slices/cancerSelectionsSlice';

const CancerIncidence = ({ type, content, predictedIncs, handleIncidence, saved, cancer, children }) => {

  const { REACT_APP_SETTING_SIMPLE, REACT_APP_SETTING_COMPLEX } = process.env;

  const dispatch = useDispatch();

  const validation = useSelector( (state) => {
    return state.validation;
  });

  const setModeledIncidence = (e) => {
    if (e.target.value === "modeled") {
      const payload = { type: e.target.value, cancer, incidence: predictedIncs.total.toFixed() };
      dispatch( setIncidence(payload) );
    }
  }

/*
*/
  return (
      <Form.Group>
      <MarkupJSON tag="p" multiline="false">{ content.text }</MarkupJSON>
      { type === REACT_APP_SETTING_COMPLEX ?
        <>
          <p>{ children }</p>
          <UserOverrideToggle
           name="incidence"
           setOverride={ handleIncidence }
           handleRemoval={ setModeledIncidence }
           saved={ saved }
          />
          <HelpTextModal
           modalTitle="Modeled incidence data" 
           modalContent={ content.modal }
          >Learn more about modeled incidence data
          </HelpTextModal>
        </>
      :
        <>
          <Form.Label srOnly htmlFor="incidence">Single instition incidence</Form.Label>
          <Form.Control 
            id="incidence"
            name="incidence" 
            isInvalid={ validation.incidence }
            value={ saved || "" } 
            type="number" 
            onChange={ handleIncidence } 
          />
          <Form.Control.Feedback type="invalid">
            { stepTerms.step1.errors.incidence }
          </Form.Control.Feedback>
        </>
      }
    </Form.Group>
  );
}

export default CancerIncidence;
