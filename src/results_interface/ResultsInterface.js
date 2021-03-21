import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import CostResult from './CostResult';
import ForecastToggle from '../user_interface/ForecastToggle';
import { getObjKey } from '../helpers/utilities';

const ResultsInterface = ({ setVisible, selections, costs, loadCostsByType }) => {

  const labels = {
    drug: "By cancer",
    cancer: "By drug"
  };

  const [costType, setCostType] = useState(labels.drug);

  const backToInputs = () => {
    setVisible({ inputs: true, results: false });
  }

  const toggleCost = useCallback(
    (e) => {
      const type = e.target.value;
      const key = getObjKey(labels, type);
      setCostType(type);
      loadCostsByType(type.split(" ").pop());
    }, [costType]
  );

  return (
    <div>
      <h2>Costs</h2>
      { costs ? 
        <>
          <p><strong>Setting: </strong>{ selections.setting }<br />
          <strong>Year: </strong>{ selections.year }</p>
          <ForecastToggle
            name="costType"
            labels={ Object.values(labels) }
            handleChange={ toggleCost }
            saved={ costType }
          />
          <Accordion>
            { Object.keys(costs).map( (cost, i) => {
              return (
                <CostResult 
                  key={ i } 
                  type={ costType } 
                  cost={ costs[cost] } 
                  eventKey={ i + 1 } 
                  tableLabel={ getObjKey(labels, costType) }
                />
              );
            })}
        {/*
        */}
          </Accordion>
        </> : <p>You need to add incidents to each cancer to get costs</p>
      }
      <Button onClick={ backToInputs } size="lg">Back to user interface</Button>
    </div>
  );
}

export default ResultsInterface;
