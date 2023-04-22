import { createSlice } from '@reduxjs/toolkit'
import { makeHashKey } from '../../helpers/utilities';

const { REACT_APP_WILMS_TUMOR } = process.env;

/**
 * cancer: {
 *   incidence: 0,
 *   risks: {
 *     rs1: 0%
 *     reg: reg
 *   }
 * }
 */
const initialState = {
  cancerButtonClicks: 0,
  allCancersInitialized: false,
  selected: {},
  cancers: {},
  initialized: false
}

const reformatWilmsRisksForUI = (risks) => {
  return risks.map(risk => {
    // Only use postoperative levels/regimens for UI display
    return { 
      inst_levels: risk.phases.postoperative.inst_levels,
      regimens: risk.phases.postoperative.regimens, 
      ...risk 
    }
  })
}

const getRiskObj = (risk, phase = "") => {
  const levels = phase.length > 0 ? risk.phases[phase].inst_levels : risk.inst_levels;
  return {
    hasMultipleRegimens: risk.hasMultipleRegimens,
    levels, 
    percentage: risk.percent_total,
    regimen: ""
  }
}

const assembleRisks = (cancer, risks) => {
  const risksObj = {};
  risks.forEach( (risk) => {
    let riskHash;
    // Just using makeHashKey to remove spaces and make lowercase
    if (cancer === makeHashKey(REACT_APP_WILMS_TUMOR)) {
      Object.keys(risk.phases).forEach(phase => {
        riskHash = makeHashKey(cancer, phase, risk.name);
        risksObj[riskHash] = getRiskObj(risk, phase);
      })
    }
    else {
      riskHash = makeHashKey(cancer, risk.name);
      risksObj[riskHash] = getRiskObj(risk);
    }
  });
  return risksObj;
}

const revertRisks = (selected, risks) => {
  let risksRevert = { ...risks };
  selected.risks.forEach( (risk) => {
    const riskHash = makeHashKey(selected.name, risk.name);
    risksRevert[riskHash].percentage = risk.percent_total;
  });
  return risksRevert;
}

const cancerSelectionsSlice = createSlice({
  name: 'cancerSelections',
  initialState: initialState,
  reducers: {
    setClicks(state, action) {
      state.cancerButtonClicks += 1;
    },
    resetClicks(state, action) {
      state.cancerButtonClicks = 0;
    },
    initializeCancer(state, action) {
      const { risks, cancer, name, ref } = action.payload; 
      let wilmsRisks;
      if (name === REACT_APP_WILMS_TUMOR) {
        wilmsRisks = reformatWilmsRisksForUI(risks);
      }
      state.selected = { name, risks: wilmsRisks || risks, ref }
      if (!state.cancers.hasOwnProperty(cancer)) {
        state.initialized = true;
        const riskObj = assembleRisks(cancer, risks);
        state.cancers[cancer] = { 
          name, 
          incidence: { custom: "" },
          risks: riskObj, 
          showCustomRisk: false, 
          hasCustomRisk: false 
        };
      }
    },
    initializeAllCancers(state, action) {
      const { cancers, incidences } = action.payload;
      state.allCancersInitialized = true;
      state.selected = {};
      state.initialized = true;
      cancers.forEach( (cancer) => {
        const hash = makeHashKey(cancer.name);
        const riskObj = assembleRisks(cancer.name, cancer.risk_strats);
        state.cancers[hash] = { 
          name: cancer.name,
          incidence: { modeled: incidences[hash].total },
          risks: riskObj, 
          showCustomRisk: false, 
          hasCustomRisk: false 
        };
      });
    },
    resetAllInitializedCancers(state, action) {
      /*
      */
      const cancerKeys = Object.keys(state.cancers);
      if (cancerKeys.length > 0) {
        state.selected = {};
        state.allCancersInitialized = false;
        state.initialized = false;
        cancerKeys.forEach( (key) => {
          delete state.cancers[key];
        });
      }
    },
    setSelection(state, action) {
      const { name, value } = action.payload;
      state.cancers[name] = value;
    },
    showCustomRisk(state, action) {
      const options = { fixed: false, custom: true };
      const { cancer, choice } = action.payload;
      state.cancers[cancer].showCustomRisk = options[choice];
      if (choice === "fixed") {
        const reverted = revertRisks(state.selected, state.cancers[cancer].risks);
        state.cancers[cancer].risks = reverted;
        state.cancers[cancer].hasCustomRisk = false;
      }
      else {
        Object.keys(state.cancers[cancer].risks).forEach( (risk) => {
          state.cancers[cancer].risks[risk].percentage = "";
        });
      }
    },
    setPercentage(state, action) {
      const { cancer, riskName, value } = action.payload;
      state.cancers[cancer].risks[riskName].percentage = value;
      const risks = Object.keys(state.cancers[cancer].risks);
      const empty = risks.every( risk => state.cancers[cancer].risks[risk].percentage.length === 0 );
      state.cancers[cancer].hasCustomRisk = empty ? false : true;
    },
    setIncidence(state, action) {
      const { type, cancer, incidence } = action.payload;
      state.cancers[cancer].incidence[type] = incidence;
    },
    setRegimen(state, action) {
      const { cancer, riskStrat, regimen } = action.payload;
      state.cancers[cancer].risks[riskStrat].regimen = regimen;
    }
  }
});

const { actions, reducer } = cancerSelectionsSlice;

export const {
  setClicks,
  resetClicks,
  initializeCancer,
  initializeAllCancers,
  resetAllInitializedCancers,
  setSelection,
  setIncidence,
  setPercentage,
  showCustomRisk,
  setRiskStrat,
  setRegimen
} = actions;

export default reducer;
