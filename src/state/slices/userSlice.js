import { createSlice } from '@reduxjs/toolkit'

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
  price_source: ""
}



const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    initializeCancer(state, action) {
      const { cancer, name } = action.payload;
      if (!state.hasOwnProperty(cancer)) {
        state[cancer] = { name, risks: {}, customRisk: false };
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
      const { cancer, riskStrat, percentage, regimen } = action.payload;
      if (!state[cancer].risks.hasOwnProperty(riskStrat)) {
        state[cancer].risks[riskStrat] = {};
      }
      state[cancer].risks[riskStrat].regimen = regimen;
      state[cancer].risks[riskStrat].percentage = percentage;
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
