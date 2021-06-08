import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import UserOverrideToggle from './user_override_toggle/UserOverrideToggle';
import { makeHashKey, sentenceCase } from '../helpers/utilities';
import stepTerms from './text/steps';
import { setIncidence } from '../state/slices/userSlice';

const CancerIncidence = ({ type, predictedIncs, handleIncidence, saved, cancer }) => {

  const dispatch = useDispatch();

  const validation = useSelector( (state) => {
    return state.validation;
  });
  
  const setModeledIncidence = (e) => {
    if (e.target.value === "modeled") {
      const payload = { cancer, incidence: predictedIncs.total };
      dispatch( setIncidence(payload) );
    }
  }

  return (
    <Form.Group>
      <Form.Label bsPrefix="form-label h5">Incidence</Form.Label>
      <Form.Text><p>{ stepTerms.step2.instructions.incidence }</p></Form.Text>
      { 
        type === "Health system" ?
          <>
            <p className="mt-3">Modeled incidence: { predictedIncs && predictedIncs.total.toFixed() }</p>
            <UserOverrideToggle
             name="incidence"
             setOverride={ handleIncidence }
             handleRemoval={ setModeledIncidence }
             saved={ saved }
            />
          </>
        :
        <>
          <Form.Control 
            name="incidence" 
            isInvalid={ validation.incidence }
            value={ saved } 
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
