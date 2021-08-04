import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DBQueryer } from '../../dbqueryer/DBQueryer';
import { CostModel } from '../../models'

const initialState = {
  costs: {},
  csvCosts: []
};

const { REACT_APP_SETTING_COMPLEX } = process.env;

const cm = new CostModel();

export const initCostCalc = createAsyncThunk(
  'costs/initCostCalcStatus',
  async(criteria, thunkAPI) => {
    const { cancers, setting, regimens, prices } = criteria;
    const { type, incidences, bodyStats, levels } = setting;
    const hasLevels = ( type === REACT_APP_SETTING_COMPLEX && levels );
    const settingData = { type, incidences, bodyStats, hasLevels };
    const hasValidInputs = cm.loadAllCostData(settingData, cancers, regimens, prices);
    return hasValidInputs && cm.getTotalCostPerCancer();
    //return true;
  }
);

export const getCostsByType = createAsyncThunk(
  'costs/getCostsByTypeStatus',
  async(type, thunkAPI) => {
    const costs = await cm.getCostsByType(type);
    return costs;
  }
);

export const getCSVCosts = createAsyncThunk(
  'costs/getCSVCostsStatus',
  async(type, thunkAPI) => {
    const csvCosts = await cm.getCSVCostsByType(type);
    return csvCosts;
  }
);

const costsSlice = createSlice({
  name: 'costs',
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(initCostCalc.fulfilled, (state, action) => {
        state.costs = action.payload;
      })
      .addCase(getCostsByType.fulfilled, (state, action) => {
        state.costs = action.payload;
      })
      .addCase(getCSVCosts.fulfilled, (state, action) => {
        state.csvCosts = action.payload;
      })
  }
});

const { actions, reducer } = costsSlice;


export default reducer;
