import React from 'react';
import Button from 'react-bootstrap/Button';
import CostResultTable from './CostResultTable';

const ResultsInterface = ({ setVisible, costs, cancers, selections }) => {
  const backToInputs = () => {
    setVisible({ inputs: true, results: false });
  }

  console.log(cancers);

  return (
    <div>
      <h2>Costs</h2>
      { costs ? 
        <>
          <p><strong>Setting: </strong>{ selections.setting }<br />
          <strong>Year: </strong>{ selections.year }</p>
          { Object.keys(cancers).map( (cancer, i) => {
            return (
              <CostResultTable 
                key={ i }
                cancer={ cancers[cancer].name }
                costs={ costs[cancer] }
              />
            );
          })}
        </> : <p>You need to add incidents to each cancer to get costs</p>
      }
      <Button onClick={ backToInputs } size="lg">Back to user interface</Button>
    </div>
  );
}

export default ResultsInterface;
