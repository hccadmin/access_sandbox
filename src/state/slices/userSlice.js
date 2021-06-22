import { createSlice } from '@reduxjs/toolkit'
import { makeHashKey } from '../../helpers/utilities';

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
  selected: {},
  initialized: false
}

const assembleRisks = (cancer, risks) => {
  let riskObj = {};
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

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setClicks(state, action) {
      state.cancerButtonClicks += 1;
    },
    resetClicks(state, action) {
      state.cancerButtonClicks = 0;
    },
    initializeCancer(state, action) {
      const { risks, cancer, name } = action.payload;
      state.selected = { name, risks }
      if (!state.hasOwnProperty(cancer)) {
        state.initialized = true;
        const riskObj = assembleRisks(cancer, risks);
        state[cancer] = { 
          name, 
          incidence: {},
          risks: riskObj, 
          showCustomRisk: false, 
          hasCustomRisk: false 
        };
      }
    },
    initializeAllCancers(state, action) {
    },
    setSelection(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    showCustomRisk(state, action) {
      const options = { fixed: false, custom: true };
      const { cancer, choice } = action.payload;
      state[cancer].showCustomRisk = options[choice];
      if (choice === "fixed") {
        const reverted = revertRisks(state.selected, state[cancer].risks);
        state[cancer].risks = reverted;
        state[cancer].hasCustomRisk = false;
      }
      else {
        Object.keys(state[cancer].risks).forEach( (risk) => {
          state[cancer].risks[risk].percentage = "";
        });
      }
    },
    setPercentage(state, action) {
      const { cancer, riskName, value } = action.payload;
      state[cancer].risks[riskName].percentage = value;
      //state[cancer].hasCustomRisk = value.length > 0;
      const risks = Object.keys(state[cancer].risks);
      const empty = risks.every( risk => state[cancer].risks[risk].percentage.length === 0 );
      state[cancer].hasCustomRisk = empty ? false : true;
      /*
      if (!state[cancer].hasCustomRisk) {
        state[cancer].hasCustomRisk = true;
      }
      */
    },
    setIncidence(state, action) {
      const { type, cancer, incidence } = action.payload;
      state[cancer].incidence[type] = incidence;
    },
    setRiskStrat(state, action) {},
    setRegimen(state, action) {
      const { cancer, riskStrat, regimen } = action.payload;
      state[cancer].risks[riskStrat].regimen = regimen;
    }
  }
});

const { actions, reducer } = userSlice;

export const {
  setClicks,
  resetClicks,
  initializeCancer,
  initializeAllCancers,
  setSelection,
  setIncidence,
  setPercentage,
  showCustomRisk,
  setRiskStrat,
  setRegimen
} = actions;

export default reducer;
