import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PriceModel from '../../models/PriceModel';
import { DBQueryer } from '../../dbqueryer/DBQueryer';

const initialState = {
  priceSource: "",
  priceList: {},
  filtered: {}
};

const pm = new PriceModel();

export const loadPrices = createAsyncThunk(
  'costs/loadPricesStatus',
  async(data, thunkAPI) => {
    const dbPrices = await DBQueryer.getAll('prices');
    pm.loadDrugPrices(dbPrices);
    const priceStructure = pm.getPriceStructure();
    return priceStructure;
  }
);

const pricesSlice = createSlice({
  name: 'costs',
  initialState: initialState,
  reducers: {
    setPriceSource(state, action) {
      state.priceSource = action.payload;
      state.filtered = state.priceList[state.priceSource];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPrices.fulfilled, (state, action) => {
        state.priceList = action.payload;
      })
  }
});

const { actions, reducer } = pricesSlice;

export const { setPriceSource } = actions;

export default reducer;
