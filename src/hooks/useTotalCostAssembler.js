import terms from '../text/global';

const useTotalCostAssembler = (cost, type) => {
  const costTerms = terms.valueOverride;
  const listType = type === "By drug" ? "drug" : "cancer";
  /*
  */
  const singleSuffix = "pricing only";
  const combinedSuffix = "combined pricing";
  const drugOverride = `${ costTerms.override } ${ singleSuffix }`;
  const given = `${ costTerms.given } ${ singleSuffix }`;
  const cancerOverride = `${ costTerms.given } and ${ costTerms.override } ${ combinedSuffix }`;
  const hasOverride = cost.totals.hasOwnProperty('override') && cost.totals.override;
  const costData = {
    drug: {
      helpText: hasOverride ? drugOverride : given,
      perChild: cost.totals.perChild,
      cost: hasOverride ? cost.totals.override : cost.totals.med
    },
    cancer: {
      helpText: hasOverride ? cancerOverride : given,
      perChild: cost.totals.perChild,
      cost: hasOverride ? cost.totals.medAndUser : cost.totals.med
    }
  }
  return costData[listType];
}

export default useTotalCostAssembler;
