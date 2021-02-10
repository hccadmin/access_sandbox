import React from 'react';
import Form from 'react-bootstrap/Form';

const RiskStratToggle = ({ custom, riskStrat, setRiskPercentage, saved }) => {
  if (!custom) {
    return `${ riskStrat.percent_total }%`;
  }
  return (
    <Form.Control 
      data-risk={ riskStrat.name }
      name="customRisk" 
      type="number" 
      value={ saved }
      placeholder="Enter the risk percentage"
      onChange={ setRiskPercentage } 
    />
  );
}

export default RiskStratToggle;
