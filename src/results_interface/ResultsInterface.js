import React from 'react';
import Button from 'react-bootstrap/Button';

const ResultsInterface = ({ visible, setVisible, costs, cancers, selections }) => {
  const backToInputs = () => {
    setVisible({ inputs: true, results: false });
  }

  return (
    <div className={ visible ? 'visible position-static' : 'invisible position-absolute' }>
      <h2>Costs</h2>
      <p><strong>Setting: </strong>{ selections.setting }<br />
      <strong>Year: </strong>{ selections.year }</p>
      <Button onClick={ backToInputs } size="lg">Back to user interface</Button>
    </div>
  );
}

export default ResultsInterface;
