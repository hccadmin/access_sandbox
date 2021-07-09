import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CostResult from './CostResult';
import { getObjKey } from '../helpers/utilities';

const CostAccordion = ({ costs, costType, labels, children }) => {
  return (
    <>
    { children && <h4>{ children }</h4> }
      <Accordion>
        { Object.keys(costs).map( (costGroup, i) => {
          return (
            <CostResult 
              key={ i } 
              type={ costType } 
              cost={ costs[costGroup] } 
              eventKey={ i + 1 } 
              tableLabel={ getObjKey(labels, costType) }
            />
          );
        })}
    {/*
    */}
      </Accordion>
    </>
  );
}

export default CostAccordion;
