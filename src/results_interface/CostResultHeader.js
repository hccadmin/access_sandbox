import React from 'react';
import { setCurrency } from '../helpers/utilities';
import { useTotalCostAssembler } from '../hooks';

const CostResultHeader = ({ cost, type }) => {
  const nameAndCost = useTotalCostAssembler(cost, type); 
  const isByDrug = type === "By drug";

  return (
    <div className="d-flex justify-content-between">
      <div className="w-50">{ cost.name }</div>
      { isByDrug &&
        <div className="w-25">Total volume: { cost.totals.dosage.toFixed(2) }</div>
      }
      <div className="w-25">Total { nameAndCost.name } cost: { setCurrency(nameAndCost.cost) }</div>
    </div>
  );
}

export default CostResultHeader;
