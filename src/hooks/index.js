import { useEffect, useState } from 'react';
import terms from '../text/global';

const useInitializeAllCancers = () => {
  const { REACT_APP_SETTING_SIMPLE, REACT_APP_SETTING_COMPLEX } = process.env;
  //const [shouldInitialize, setInitialize] = useState(false);
  let shouldInitialize = false;

/*
  useEffect( () => {
    if (
      type === REACT_APP_SETTING_COMPLEX &&
      cancers.length > 0 &&
      Object.keys(incidences).length > 0
    ) {
      initializeAllCancers = true;
    }
  }, [type, cancers, incidences]);
  */
  return (type, cancers, incidences) => {
    console.log(type, cancers, incidences);
    if (
      type === REACT_APP_SETTING_COMPLEX &&
      cancers.length > 0 &&
      Object.keys(incidences).length > 0
    ) {
      shouldInitialize = true;
    }
    return shouldInitialize;
  }
}

const useUserOverride = (saved) => {
  const [visibility, setVisibility] = useState({ modeled: true, custom: false });

  useEffect( () => {
    if (typeof saved === "string") {
      setVisibility({
        modeled: false,
        custom: true
      });
    }
  }, [saved]);

  return [visibility, setVisibility];
}

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
      cost: hasOverride ? cost.totals.override : cost.totals.med
    },
    cancer: {
      helpText: hasOverride ? cancerOverride : given,
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

export { useTotalCostAssembler, useUserOverride, useInitializeAllCancers };
