import React from 'react';
import Card from 'react-bootstrap/Card';
import { toSingular } from '../helpers/utilities';

const ResultsUserSelections = ({ selections, priceSource }) => {

  return (
    <ul className="list-unstyled">
      <li><strong>Setting:</strong> { selections.type }</li>
      { selections.subtype && 
        <li><strong>Geographical area:</strong> { toSingular(selections.subtype) }</li>
      }
      <li><strong>{ selections.type === "Health system" ? "Area selected:" : "Country:" }</strong> { selections.name }</li>
      <li><strong>Year:</strong> { selections.year }</li>
      { selections.type === "Health system" && 
        <li><strong>Diagnoses type:</strong> { selections.diagType }</li>
      }
      <li><strong>Price source:</strong> { priceSource }</li>
    </ul>
  );
}

export default ResultsUserSelections;
