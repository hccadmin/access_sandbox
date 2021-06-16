import React from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import UserOverrideToggle from './user_override_toggle/UserOverrideToggle';
import stepTerms from './text/steps';
import { setIncidence } from '../state/slices/userSlice';

const CancerIncidence = ({ type, predictedIncs, handleIncidence, saved, cancer, children }) => {

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

  return type === "Health system" ?
    (
      <>
        <h6 className="mt-3">{ children }</h6>
        <UserOverrideToggle
         name="incidence"
         setOverride={ handleIncidence }
         handleRemoval={ setModeledIncidence }
         saved={ saved }
        />
      </>
    )
    :
    (
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
    );
}

export default CancerIncidence;
