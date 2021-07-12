import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import CostResult from './CostResult';
import LevelsCostAccordion from './LevelsCostAccordion';
import CostAccordion from './CostAccordion';
import ForecastToggle from '../user_interface/ForecastToggle';
import ResultsUserSelections from './ResultsUserSelections';
import { getObjKey } from '../helpers/utilities';

const ResultsInterface = ({ setVisible, costs, loadCostsByType }) => {
  const { REACT_APP_SETTING_COMPLEX } = process.env;

  const labels = {
    drug: "By cancer",
    cancer: "By drug"
  };

  const [costType, setCostType] = useState(labels.drug);

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const levels = setting.levels.custom.length > 0 ? setting.levels.custom : setting.levels.modeled;

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

/*
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
      </Accordion>
    );
  }
*/

  return costs && (
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
          { setting.type === REACT_APP_SETTING_COMPLEX ?
            <LevelsCostAccordion
              combined={ Array.isArray(costs) && costs[0] }
              individual={ Array.isArray(costs) && costs.slice(1) }
              costType={ costType }
              labels={ labels }
              levels={ levels }
            />
            : 
            <CostAccordion
              costs={ costs }
              costType={ costType }
              labels={ labels }
            />
          }
        </> : <p>You need to add incidents to each cancer to get costs</p>
      }
      <Button onClick={ backToInputs } size="lg">Back to user interface</Button>
    </div>
  );
}

export default ResultsInterface;
