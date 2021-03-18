import React from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import CostResult from './CostResult';
import ForecastToggle from '../user_interface/ForecastToggle';

const ResultsInterface = ({ setVisible, costs, selections }) => {
  const backToInputs = () => {
    setVisible({ inputs: true, results: false });
  }

  const toggleCost = ({}) => {
  }

  return (
    <div>
      <h2>Costs</h2>
      { costs ? 
        <>
          <p><strong>Setting: </strong>{ selections.setting }<br />
          <strong>Year: </strong>{ selections.year }</p>
          <ForecastToggle
            names={ ['By cancer', 'By drug'] }
            handleChange={ toggleCost }
          />
          <Accordion>
            { Object.keys(costs).map( (cost, i) => {
              return (
                <CostResult key={ i } cost={ costs[cost] } eventKey={ i + 1 } />
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
