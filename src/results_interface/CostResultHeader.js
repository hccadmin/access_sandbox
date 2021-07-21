import React from 'react';
import { setNumFormat, sentenceCase } from '../helpers/utilities';
import { useTotalCostAssembler } from '../hooks';

const CostResultHeader = ({ cost, type }) => {
  const textAndCost = useTotalCostAssembler(cost, type); 
  const isByDrug = type === "By drug";

  return (
    <div className="d-flex justify-content-between">
      <div>{ cost.name }</div>
      { isByDrug &&
        <div>Total volume: { setNumFormat(cost.totals.dosage, 'decimal') } <small><em>(mg or IU)</em></small></div>
      }
      <div className="text-right">Total cost: { setNumFormat(textAndCost.cost, 'currency', { currency: 'USD' }) }<br />
      Avg cost per child: { setNumFormat(textAndCost.perChild, 'currency', { currency: 'USD' }) }<br />
        <small><em>{ `(${ sentenceCase(textAndCost.helpText) })` }</em></small>
      </div>
    </div>
  );
}

export default CostResultHeader;
