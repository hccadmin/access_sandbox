import React from 'react';
import Form from 'react-bootstrap/Form';

const RiskStratToggle = ({ num, custom, validation, riskStrat, setRiskPercentage, saved }) => {
  if (!custom) {
    return `${ riskStrat.percent_total }%`;
  }
  return (
    <Form.Group>
      <Form.Label srOnly="true" htmlFor={ `customRisk-${ num }` }>
        Custom risk { num }
      </Form.Label>
      <Form.Control 
        data-risk={ riskStrat.name }
        isInvalid={ validation.sum || validation.risk }
        id={ `customRisk-${ num }` }
        name="customRisk" 
        type="number" 
        value={ saved }
        placeholder="Enter the risk percentage"
        onChange={ setRiskPercentage } 
      />
      <Form.Control.Feedback type="invalid">
        { validation.sum ? "Numbers must add up to 100" : "Please enter a risk percentage" }
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default RiskStratToggle;
