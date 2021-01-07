import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DBQueryer } from '../dbqueryer/DBQueryer';
import { CancerModel } from '../models';

const initialState = {
  cancers: {
    names: [],
    full: []
  }
};

const loadDBCancers = createAsyncThunk(
  'cancers/loadCancersStatus',
  async(thunkAPI) => {
    const dbCancers = await DBQueryer.getAll('cancers');
    CancerModel.load(dbCancers);
    const cancers = {
      names: CancerModel.getCancerNames(),
      full: CancerModel.getCancersFull()
    }
    return cancers;
  }
);

const cancersSlice = createSlice({
  name: 'cancers',
  initialState: initialState,
  reducers: {
    getCancerNames(state, action) {},
    getCancersFull(state, action) {}
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDBCancers.fulfilled, (state, action) => {
        state.cancers = action.payload;
      })
  }
});

const { actions, reducer } = cancersSlice;

export const { getCancerNames, getCancersFull, loadCancers } = actions;

export default reducer;
