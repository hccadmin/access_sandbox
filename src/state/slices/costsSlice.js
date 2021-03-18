import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DBQueryer } from '../../dbqueryer/DBQueryer';
import { CostModel } from '../../models'

const initialState = {
  costs: {}
};

const cm = new CostModel();

export const initCostCalc = createAsyncThunk(
  'costs/initCostCalcStatus',
  async(criteria, thunkAPI) => {
    const { user, setting, regimens, prices } = criteria;
    const { incidences, bodyStats } = setting;
    const settingData = { incidences, bodyStats };
    const { selected, ...cancers } = user;
    const hasValidInputs = cm.loadAllCostData(settingData, cancers, regimens, prices);
    return hasValidInputs && cm.getTotalDosageAndCost();
  }
);

const costsSlice = createSlice({
  name: 'costs',
  initialState: initialState,
  reducers: {
    loadAllCostData(state, action) {
    /* No longer needed
      const { setting, user, regimens } = action.payload;
      const hasValidInputs = cm.loadAllCostData(setting, user, regimens);
      state.list = hasValidInputs && cm.getTotalDosageAndCost();
    */
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(initCostCalc.fulfilled, (state, action) => {
        state.costs = action.payload;
      })
  }
});

const { actions, reducer } = costsSlice;


export default reducer;
