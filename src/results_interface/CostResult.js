import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import CostResultHeader from './CostResultHeader';
import CostResultTable from './CostResultTable';
import { toPlural, setCurrency } from '../helpers/utilities';

const CostResult = ({ cost, type, eventKey, tableLabel }) => {
  return (
    <Card border="0">
      <Accordion.Toggle as={ Card.Header } eventKey={ eventKey }>
        <CostResultHeader
          type={ type }
          cost={ cost }
        />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={ eventKey }>
        <Card.Body>
          <CostResultTable 
            costs={ cost } 
            type={ type } 
            tableLabel={ toPlural(tableLabel) } 
          />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default CostResult;
