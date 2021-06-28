import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import CostResult from './CostResult';
import ForecastToggle from '../user_interface/ForecastToggle';
import ResultsUserSelections from './ResultsUserSelections';
import { getObjKey } from '../helpers/utilities';

const ResultsInterface = ({ setVisible, costs, loadCostsByType }) => {

  const labels = {
    drug: "By cancer",
    cancer: "By drug"
  };

  const [costType, setCostType] = useState(labels.drug);

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const priceSource = useSelector( (state) => {
    return state.prices.priceSource;
  });

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

  const getCostAccordion = (cost) => {
    if (Object.keys(cost).length === 0) {
      return false;
    }
    return (
      <Accordion>
        { Object.keys(cost).map( (costGroup, i) => {
          return (
            <CostResult 
              key={ i } 
              type={ costType } 
              cost={ cost[costGroup] } 
              eventKey={ i + 1 } 
              tableLabel={ getObjKey(labels, costType) }
            />
          );
        })}
    {/*
    */}
      </Accordion>
    );
  }

  return (
    <div>
      <h2>Costs</h2>
      { costs ? 
        <>
          <ResultsUserSelections
            selections={ setting }
            priceSource={ priceSource }
          />
          <ForecastToggle
            name="costType"
            labels={ Object.values(labels) }
            handleChange={ toggleCost }
            saved={ costType }
          />
          { Array.isArray(costs) ? 
            costs.map( (cost, i) => {
              return (
                <div key={ i }>
                  <h3>{ `Level ${ i + 1 } costs` }</h3>
                  { getCostAccordion(cost) }
                </div>
              );
            })
            : getCostAccordion(costs) 
          } 
        </> : <p>You need to add incidents to each cancer to get costs</p>
      }
      <Button onClick={ backToInputs } size="lg">Back to user interface</Button>
    </div>
  );
}

export default ResultsInterface;
