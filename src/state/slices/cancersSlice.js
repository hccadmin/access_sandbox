import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DBQueryer } from '../../dbqueryer/DBQueryer';
import { CancerModel } from '../../models';

const initialState = {
  names: [],
  full: [],
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
      console.error(e);
    }
    return cancers;
  }
);

const cancersSlice = createSlice({
  name: 'cancers',
  initialState: initialState,
  reducers: {
    getRisksAndRegs(state, action) {
      const found = state.full.find( (cancer) => {
        return cancer.name === action.payload;
      });
      state.selected = found;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCancers.fulfilled, (state, action) => {
        state.full = action.payload.full;
        state.names = action.payload.names;
      })
  }
});

const { actions, reducer } = cancersSlice;

export const { getRisksAndRegs } = actions;

export default reducer;