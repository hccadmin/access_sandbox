import { DBQueryer } from '../../dbqueryer/DBQueryer';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

/**
 * ui: {
 *   setting: "",
 *   years: []
 *   cancers: [],
 *   drugs: [],
 *   }
 * }
 */
const initialState = {
  cancers: [],
  drugs: [],
  years: [],
  countries: [],
  price_source: [],
  regions: {}
}

export const loadUI = createAsyncThunk(
  'ui/loadUIStatus',
  async(thunkAPI) => {
    let dbUI;
    try {
      dbUI = await DBQueryer.getAll('ui_labels');
      dbUI = dbUI[0];
    }
    catch (e) {
      console.error(e);
    }
    return dbUI;
  }
);

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    getUILabels(state, action) {
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUI.fulfilled, (state, action) => {
        state.cancers = action.payload.cancers;
        state.drugs = action.payload.drugs;
        state.years = action.payload.years;
        state.countries = action.payload.countries;
        state.price_source = action.payload.price_source;
        state.regions = action.payload.regions;
      });
  }
});

const { actions, reducer } = uiSlice;

export const { getUILabels } = actions;

export default reducer;
