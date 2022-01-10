import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DBQueryer } from '../../dbqueryer/DBQueryer';
import { SettingModel } from '../../models';

const initialState = {
  type: "",
  typeHash: "",
  subtype: "",
  name: "",
  year: "",
  diagType: "",
  incidences: {},
  bodyStats: {},
  levels: { modeled: [24, 55, 21], custom: [] }
};

const sm = new SettingModel();

export const loadIncidencesAndBsa = createAsyncThunk(
  'setting/loadIncidencesAndBsaStatus',
  async(data, thunkAPI) => {
    const { name, type, year, diagType } = data;
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

// This mess needs to be seriously refactored
      if (reset) {
        state.subtype = "";
        state.name = "";
        state.year = "";
        state.incidences = {};
        state.bodyStats = {};
      }
      if (name === "type") {
        const typeHash = value.split(" ").shift().toLowerCase();
        state.typeHash = typeHash;
        if (value === "Single institution") {
          state.diagType = "diagnosed";
        }
        else {
          state.diagType = "";
        }
      }
      else if (name === "subtype") { 
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
      else {}
      state[name] = value;
    },

    allFieldsFilled(state, action) {
      const { name, year, diagType } = state;
      console.log(name, year, diagType);
      return [name, year, diagType].every( (input) => {
        return input.length > 0;
      });
    },

    setLevel(state, action) {
      const { index, level } = action.payload;
      state.levels.custom[index] = level;
    },

    removeLevels(state, action) {
      state.levels.custom = [];
    },

    getLevels(state, action) {}
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadIncidencesAndBsa.fulfilled, (state, action) => {
        state.incidences = action.payload.incidences;
        state.bodyStats = action.payload.bodyStats;
      })
  }
/*
*/
});

const { actions, reducer } = settingSlice;

export const { setSettingInput, allFieldsFilled, setLevel, removeLevels } = actions;

export default reducer;
