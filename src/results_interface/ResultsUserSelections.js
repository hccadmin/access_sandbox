import React from 'react';
import Card from 'react-bootstrap/Card';
import { sentenceCase, toSingular } from '../helpers/utilities';

const ResultsUserSelections = ({ selections, priceSource }) => {
  const { REACT_APP_SETTING_COMPLEX } = process.env;

  return (
    <ul className="list-unstyled">
      <li><strong>Setting:</strong> { selections.type }</li>
      { selections.subtype && 
        <li><strong>Geographical area:</strong> { sentenceCase( (selections.subtype) ) }</li>
      }
      <li><strong>{ selections.type === REACT_APP_SETTING_COMPLEX ? "Area selected:" : "Country:" }</strong> { selections.name }</li>
      <li><strong>Year:</strong> { selections.year }</li>
      { selections.type === REACT_APP_SETTING_COMPLEX && 
        <li><strong>Diagnoses type:</strong> { sentenceCase(selections.diagType) }</li>
      }
      <li><strong>Price source:</strong> { sentenceCase(priceSource) }</li>
    </ul>
  );
}

export default ResultsUserSelections;
