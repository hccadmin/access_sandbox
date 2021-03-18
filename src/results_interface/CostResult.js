import React from 'react';
import CostResultTable from './CostResultTable';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const CostResult = ({ cost, eventKey }) => {
  return (
    <Card border="0">
      <Accordion.Toggle as={ Card.Header } eventKey={ eventKey }>
        <div className="d-flex justify-content-between">
          <p>{ cost.name }</p>
          <p>Total median cost: { `$${cost.totals.med.toFixed(2)}` }</p>
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={ eventKey }>
        <Card.Body>
          <CostResultTable costs={ cost } />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default CostResult;
