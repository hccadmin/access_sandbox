import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DBQueryer } from '../dbqueryer/DBQueryer';
import { CostModel } from '../models'

const initialState = {
};

const cm = new CostModel();

export const loadRegimens = createAsyncThunk(
  'cancers/loadRegimensStatus',
  async(cancer, thunkAPI) => {
    const regimens = await DBQueryer.getRegimens(cancer);
    return regimens;
  }
);

const costsSlice = createSlice({
  name: 'costs',
  initialState: initialState,
  reducers: {
    updateRegimen(state, action) {}
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRegimens.fulfilled, (state, action) => {
        state.costs = action.payload;
      })
  }
});

const { actions, reducer } = costsSlice;

export const { updateRegimen } = actions;

export default reducer;
