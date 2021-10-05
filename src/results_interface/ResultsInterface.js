import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
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
    <div className="results-interface mt-5">
      <Card border="0">
        <Card.Body>
          <Card.Title as="h2">Costs</Card.Title>
          <Card.Text as="div" bsPrefix="card-text card-border">
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
                <ResultsUserSelections
                  selections={ setting }
                  priceSource={ priceSource }
                />
                <p>*{ resultsText.pricePerVial }</p>
                <h3 className="font-weight-bold">Grand total: { grandTotal } </h3>
              </Card.Text>
            </Card.Body>
          </Card>
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
      <Button onClick={ backToInputs } size="lg">Back to user interface</Button>
    </div>
  );
}

export default ResultsInterface;
