import React from 'react';
import { setCurrency, sentenceCase } from '../helpers/utilities';
import { useTotalCostAssembler } from '../hooks';

const CostResultHeader = ({ cost, type }) => {
  const textAndCost = useTotalCostAssembler(cost, type); 
  const isByDrug = type === "By drug";

  return (
    <div className="d-flex justify-content-between">
      <div className="w-50">{ cost.name }</div>
      { isByDrug &&
        <div className="w-25">Total volume: { cost.totals.dosage.toFixed(2) }</div>
      }
      <div className="w-25">Total cost: { setCurrency(textAndCost.cost) }<br />
        <span><em>{ `(${ sentenceCase(textAndCost.helpText) })` }</em></span>
      </div>
    </div>
  );
}

export default CostResultHeader;
