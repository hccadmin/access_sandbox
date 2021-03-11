import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DBQueryer } from '../../dbqueryer/DBQueryer';
import { SettingModel } from '../../models';

const initialState = {
  type: "",
  subtype: "",
  name: "",
  year: "",
  diagType: "",
  incidences: {},
  bodyStats: {}
};

const sm = new SettingModel();

export const loadIncidencesAndBsa = createAsyncThunk(
  'setting/loadIncidencesAndBsaStatus',
  async(data, thunkAPI) => {
    const { name, type, year, diagType } = data;
    let cleanSetting;
    const result = await Promise.all([
      DBQueryer.getSetting(name, year, `${diagType}_standard`),
      DBQueryer.getBsa(name)
    ]);
    const [dbSetting, dbBodyStats] = result;
    sm.loadSetting(dbSetting[0], dbBodyStats[0]);
    const incidences = sm.getIncidences();
    const bodyStats = sm.getBodyStats();
    return { incidences, bodyStats };
  }
);

/*
*/

const settingSlice = createSlice({
  name: 'setting',
  initialState: initialState,
  reducers: {
    setSettingInput(state, action) {
      let { name, value, reset, ...inputs } = action.payload;
      if (reset) {
        state.subtype = "";
        state.name = "";
      }
      if (name === "subtype") { 
        if (state.name === "Worldwide") {
          state.name = "";
        }
        else if (value === "worldwide") {
          state.subtype = value;
          name = "name";
          value = "Worldwide";
        }
        else {}
      }
      state[name] = value;
    },
    getSetting(state, action) {}
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadIncidencesAndBsa.fulfilled, (state, action) => {
        state.incidences = action.payload.incidences;
        state.bsa = action.payload.bodyStats;
      })
  }
/*
*/
});

const { actions, reducer } = settingSlice;

export const { getSetting, setSettingInput } = actions;

export default reducer;
