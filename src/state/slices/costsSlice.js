import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DBQueryer } from '../../dbqueryer/DBQueryer';
import { CostModel } from '../../models'
import { SettingModel } from '../../models';

const initialState = {
  priceSource: "consolidated",
  list: {}
};

const sm = new SettingModel();
const cm = new CostModel();

export const initCostCalc = createAsyncThunk(
  'costs/initCostCalcStatus',
  async(criteria, thunkAPI) => {
    const { user, setting, regimens } = criteria;
    const { name, type, year, diagType } = setting;
    const { selected, ...cancers } = user;
    const result = await Promise.all([
      DBQueryer.getSetting(name, year, diagType),
      DBQueryer.getBsa(name),
      DBQueryer.getAll('prices')
    ]);
    const [dbSetting, dbBsa, dbPrices] = result;
    sm.loadSetting(dbSetting[0], dbBsa[0]);
    const settingData = sm.getSettingData();

    cm.loadDrugPrices(initialState.priceSource, dbPrices);
    const hasValidInputs = cm.loadAllCostData(settingData, cancers, regimens);
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
        console.log(action.payload);
        state.list = action.payload;
      })
  }
});

const { actions, reducer } = costsSlice;


export default reducer;
