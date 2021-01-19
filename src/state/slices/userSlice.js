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
}



const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    initializeCancer(state, action) {
      const { cancer, name } = action.payload;
      if (!state.hasOwnProperty(cancer)) {
        state[cancer] = { name };
        state[cancer].risks = {};
      }
    },
    setIncidence(state, action) {
      const { cancer, incidence } = action.payload;
      state[cancer].incidence = incidence;
    },
    setRiskStrat(state, action) {},
    setRegimen(state, action) {
      const { cancer, riskStrat, regimen } = action.payload;
      if (!state[cancer].risks.hasOwnProperty(riskStrat)) {
        state[cancer].risks[riskStrat] = {};
      }
      state[cancer].risks[riskStrat].regimen = regimen;
    }
  }
});

const { actions, reducer } = userSlice;

export const {
  initializeCancer,
  setIncidence,
  setRiskStrat,
  setRegimen
} = actions;

export default reducer;
