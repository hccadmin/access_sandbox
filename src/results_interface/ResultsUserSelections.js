import React from 'react';
import Card from 'react-bootstrap/Card';
import { toSingular } from '../helpers/utilities';

const ResultsUserSelections = ({ selections, priceSource }) => {

  return (
    <ul className="list-unstyled">
      <li>Setting: { selections.type }</li>
      { selections.subtype && 
        <li>Geographical area: { toSingular(selections.subtype) }</li>
      }
      <li>{ selections.type === "Health system" ? "Area selected:" : "Country:" } { selections.name }</li>
      <li>Year: { selections.year }</li>
      { selections.type === "Health system" && 
        <li>Diagnoses type: { selections.diagType }</li>
      }
      <li>Price source: { priceSource }</li>
    </ul>
  );
}

export default ResultsUserSelections;
