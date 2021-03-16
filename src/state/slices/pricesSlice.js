import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DBQueryer } from '../../dbqueryer/DBQueryer';

const initialState = {
  priceSource: "",
  list: {}
};

export const loadPrices = createAsyncThunk(
  'costs/loadPricesStatus',
  async(data, thunkAPI) => {
    const dbPrices = await DBQueryer.getAll('prices');
    return dbPrices;
  }
);

const pricesSlice = createSlice({
  name: 'costs',
  initialState: initialState,
  reducers: {
    setPriceSource(state, action) {
      state.priceSource = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPrices.fulfilled, (state, action) => {
        state.list = action.payload;
      })
  }
});

const { actions, reducer } = pricesSlice;

export const { setPriceSource } = actions;

export default reducer;
