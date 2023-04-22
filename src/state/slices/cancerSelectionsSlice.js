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
    const { phases, ...rest } = risk;
    return { regimens: risk.phases.postop.regimens, ...rest }
  })
}

const assembleRisks = (cancer, risks) => {
  const riskObj = {};
  risks.forEach( (risk) => {
    const riskHash = makeHashKey(cancer, risk.name);
    riskObj[riskHash] = { 
      hasMultipleRegimens: risk.hasMultipleRegimens,
      percentage: risk.percent_total,
      levels: risk.inst_levels,
      regimen: ""
    };
  });
  return riskObj;
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
      let { risks, cancer, name, ref } = action.payload; 
      if (name === REACT_APP_WILMS_TUMOR) {
        risks = reformatWilmsRisksForUI(risks);
      }
      state.selected = { name, risks, ref }
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
      //state[cancer].hasCustomRisk = value.length > 0;
      const risks = Object.keys(state.cancers[cancer].risks);
      const empty = risks.every( risk => state.cancers[cancer].risks[risk].percentage.length === 0 );
      state.cancers[cancer].hasCustomRisk = empty ? false : true;
      /*
      if (!state[cancer].hasCustomRisk) {
        state[cancer].hasCustomRisk = true;
      }
      */
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
