import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import CostResultHeader from './CostResultHeader';
import CostResultTable from './CostResultTable';
import { toPlural, setCurrency } from '../helpers/utilities';

const CostResult = ({ cost, type, eventKey, tableLabel }) => {

  const decoratedOnClick = useAccordionToggle(
    eventKey, 
    //() => callback && callback(eventKey)
  );

  return (
    <Card border="0">
      <Card.Header onClick={ decoratedOnClick }>
        <CostResultHeader
          type={ type }
          cost={ cost }
        />
      </Card.Header>
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
