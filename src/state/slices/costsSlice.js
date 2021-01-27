import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DBQueryer } from '../../dbqueryer/DBQueryer';
import { CostModel } from '../../models'

const initialState = {
  priceType: "",
  list: {}
};

const cm = new CostModel();

export const loadPrices = createAsyncThunk(
  'costs/loadPricesStatus',
  async(type, thunkAPI) => {
    const prices = await DBQueryer.getAll('prices');
    cm.loadDrugPrices(type, prices);
    return type;
  }
);

const costsSlice = createSlice({
  name: 'costs',
  initialState: initialState,
  reducers: {
    loadAllCostData(state, action) {
      //console.log(action.payload);
      const { setting, user, regimens } = action.payload;
      const hasValidInputs = cm.loadAllCostData(setting, user, regimens);
      state.list = hasValidInputs && cm.getTotalDosageAndCost();
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPrices.fulfilled, (state, action) => {
        state.priceType = action.payload;
      })
  }
});

const { actions, reducer } = costsSlice;

export const { loadAllCostData } = actions;

export default reducer;
