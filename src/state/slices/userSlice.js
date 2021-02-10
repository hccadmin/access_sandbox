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
  setting: "",
  year: "",
  price_source: "",
  selected: {}
}

const assembleRisks = (cancer, risks) => {
  let riskObj = {};
  risks.forEach( (risk) => {
    const riskHash = makeHashKey(cancer, risk.name);
    riskObj[riskHash] = { 
      percentage: risk.percent_total,
      regimen: ""
    };
  });
  return riskObj;
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    initializeCancer(state, action) {
      const { risks, cancer, name } = action.payload;
      state.selected = { name, risks }
      if (!state.hasOwnProperty(cancer)) {
        const riskObj = assembleRisks(cancer, risks);
        state[cancer] = { name, risks: riskObj, customRisk: false };
      }
    },
    setSelection(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setCustomRisk(state, action) {
      const { cancer, riskToggle } = action.payload;
      state[cancer].customRisk = riskToggle;
    },
    setIncidence(state, action) {
      const { cancer, incidence } = action.payload;
      state[cancer].incidence = incidence;
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
  initializeCancer,
  setSelection,
  setIncidence,
  setCustomRisk,
  setRiskStrat,
  setRegimen
} = actions;

export default reducer;
