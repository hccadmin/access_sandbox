import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import CostResult from './CostResult';
import LevelsCostAccordion from './LevelsCostAccordion';
import CostAccordion from './CostAccordion';
import ForecastToggle from '../user_interface/ForecastToggle';
import ResultsDownload from './ResultsDownload';
import ResultsUserSelections from './ResultsUserSelections';
import resultsText from './text/results.json';
import { getObjKey, objNotEmpty, setNumFormat } from '../helpers/utilities';

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
      //console.log("Toggled type: ", type);
    }, [costType]
  );

  const grandTotal = Array.isArray(costs) ? 
    setNumFormat(costs[0].grandTotal, 'currency', { currency: 'USD' }) :
    setNumFormat(costs.grandTotal, 'currency', { currency: 'USD' });

  return objNotEmpty(costs) && (
    <div>
      <h2>Costs</h2>
      <ResultsDownload 
        classes="float-right"
        selections={ setting }
        grandTotal={ grandTotal }
        priceSource={ priceSource }
        type={ costType.split(" ")[1] }
        costs={ costs }
      >
        Download CSV
      </ResultsDownload>
      { costs ? 
        <>
          <ResultsUserSelections
            selections={ setting }
            priceSource={ priceSource }
          />
          <p className="font-italic">*{ resultsText.pricePerVial }</p>
          <h3>Grand total: { grandTotal } </h3>
          <ForecastToggle
            name="costType"
            labels={ Object.values(labels) }
            handleChange={ toggleCost }
            saved={ costType }
          />
          { setting.type === REACT_APP_SETTING_COMPLEX ?
            Array.isArray(costs) && 
              <LevelsCostAccordion
                combined={ Array.isArray(costs) && costs[0] }
                individual={ Array.isArray(costs) && costs.slice(1) }
                costType={ costType }
                labels={ labels }
                levels={ levels }
              />
            : 
              <CostAccordion
                costs={ objNotEmpty(costs) && costs.individual }
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
