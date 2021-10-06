import React from 'react';
import { setNumFormat, sentenceCase } from '../helpers/utilities';
import { useTotalCostAssembler } from '../hooks';

const CostResultHeader = ({ cost, type, icon }) => {
  const textAndCost = useTotalCostAssembler(cost, type); 
  const isByDrug = type === "By drug";

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="heading-wrapper d-flex align-self-center align-items-center">
        <div className={ `icon ${ icon }` }></div>
        <h4 className="accordion-heading">{ cost.name }</h4>
      </div>
      { isByDrug &&
        <div className="heading-stats">Total volume: <strong>{ setNumFormat(cost.totals.dosage, 'decimal') }</strong> <small>(mg or IU)</small></div>
      }
      <div className="text-right heading-stats">Total cost: <strong>{ setNumFormat(textAndCost.cost, 'currency', { currency: 'USD' }) }</strong><br />
      Avg cost per patient: <strong>{ setNumFormat(textAndCost.perChild, 'currency', { currency: 'USD' }) }</strong><br />
        <small>{ `(${ sentenceCase(textAndCost.helpText) })` }</small>
      </div>
    </div>
  );
}

export default CostResultHeader;
