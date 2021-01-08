import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DBQueryer } from '../dbqueryer/DBQueryer';
import { CancerModel } from '../models';

const initialState = {
  cancers: {
    names: [],
    full: []
  }
};

const cm = new CancerModel();

export const loadCancers = createAsyncThunk(
  'cancers/loadCancersStatus',
  async(thunkAPI) => {
    const dbCancers = await DBQueryer.getAll('cancers');
    cm.loadCancers(dbCancers);
    const cancers = {
      names: cm.getCancerNames(),
      full: cm.getCancersFull()
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
      .addCase(loadCancers.fulfilled, (state, action) => {
        state.cancers = action.payload;
      })
  }
});

const { actions, reducer } = cancersSlice;

export const { getCancerNames, getCancersFull } = actions;

export default reducer;
