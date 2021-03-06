import React from 'react';
import { setCurrency, sentenceCase } from '../helpers/utilities';
import { useTotalCostAssembler } from '../hooks';

const CostResultHeader = ({ cost, type }) => {
  const textAndCost = useTotalCostAssembler(cost, type); 
  const isByDrug = type === "By drug";

  return (
    <div className="d-flex justify-content-between">
      <div className="w-40">{ cost.name }</div>
      { isByDrug &&
        <div className="w-40">Total volume: { cost.totals.dosage.toFixed(2) } <small><em>(mg or IU)</em></small></div>
      }
      <div className="w-30 text-right">Total cost: { setCurrency(textAndCost.cost) }<br />
        <small><em>{ `(${ sentenceCase(textAndCost.helpText) })` }</em></small>
      </div>
    </div>
  );
}

export default CostResultHeader;
