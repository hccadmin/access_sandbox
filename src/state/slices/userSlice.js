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
    setIncidence(state, action) {
      const { cancer, incidence } = action.payload;
      if (!state.hasOwnProperty(cancer)) {
        state[cancer] = {};
      }
      state[cancer].incidence = incidence;
    },
    setRiskStrat(cancerRisk) {},
    setRegimen(cancerRisk) {},
  }
});

const { actions, reducer } = userSlice;

export const {
  setIncidence,
  setRiskStrat,
  setRegimen
} = actions;

export default reducer;
