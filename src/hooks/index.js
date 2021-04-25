import { useEffect, useState } from 'react';

const useTotalCostAssembler = (cost, type) => {
  const listType = type === "By drug" ? "drug" : "cancer";
  const hasOverride = cost.totals.hasOwnProperty('override');
  const costData = {
    drug: {
      name: hasOverride ? "" : "median",
      cost: hasOverride ? cost.totals.override : cost.totals.med
    },
    cancer: {
      name: hasOverride ? "combined" : "median",
      cost: hasOverride ? cost.totals.medAndUser : cost.totals.med
    }
  }
  return costData[listType];
}

/*
const useCompletedInputs = (...inputs) => {
  const [areComplete, setComplete] = useState(false);


  const allFieldsFilled = (arr) => {
    return arr.every( (val) => {
      return val.length > 0;
    });
  }

  useEffect( () => {
    setComplete( allFieldsFilled(inputs) );
  });

  //return areComplete;
  return allFieldsFilled(inputs);;
}
*/

export { useTotalCostAssembler };
