import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DBQueryer } from '../dbqueryer/DBQueryer';
import { CancerModel } from '../models';

const initialState = {
  cancers: {
    names: [],
    full: []
  },
  selected: {}
};

const cm = new CancerModel();

export const loadCancers = createAsyncThunk(
  'cancers/loadCancersStatus',
  async(thunkAPI) => {
    let cancers = { names: [], full: [] };
    try {
      const dbCancers = await DBQueryer.getAll('cancers');
      const dbRegimens = await DBQueryer.getAll('regimens');
      cm.loadCancers(dbCancers, dbRegimens);
      cancers.names = cm.getCancerNames();
      cancers.full = cm.getCancersFull();
    }
    catch (e) {
      console.log(e);
    }
    return cancers;
  }
);

const cancersSlice = createSlice({
  name: 'cancers',
  initialState: initialState,
  reducers: {
    getRisksAndRegs(state, action) {
      const found = state.cancers.full.find( (cancer) => {
        return cancer.name === action.payload;
      });
      state.selected = found;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCancers.fulfilled, (state, action) => {
        state.cancers = action.payload;
      })
  }
});

const { actions, reducer } = cancersSlice;

export const { getRisksAndRegs } = actions;

export default reducer;
