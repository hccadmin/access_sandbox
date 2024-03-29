import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DBQueryer } from '../../dbqueryer/DBQueryer';
import { CancerModel } from '../../models';

const initialState = {
  full: [],
  regimenContent: {},
  regimens: {}
};

const cm = new CancerModel();

export const loadCancers = createAsyncThunk(
  'cancerData/loadCancersStatus',
  async(thunkAPI) => {
    let cancers = { names: [], full: [], regimens: {} };
    try {
      const dbCancers = await DBQueryer.getAll('cancers');
      const dbRegimens = await DBQueryer.getAll('regimens');
      cm.loadCancers(dbCancers, dbRegimens);
      cancers.full = cm.getCancersFull();
      cancers.regimenContent = cm.getRegimenContent();
      cancers.regimens = cm.getRegimens();
    }
    catch (e) {
      console.error(e);
    }
    return cancers;
  }
);

const cancerDataSlice = createSlice({
  name: 'cancerData',
  initialState: initialState,
  reducers: {
    getRisksAndRegs(state, action) {
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCancers.fulfilled, (state, action) => {
        state.full = action.payload.full;
        state.regimenContent = action.payload.regimenContent;
        state.regimens = action.payload.regimens;
      })
  }
});

const { actions, reducer } = cancerDataSlice;

export default reducer;
