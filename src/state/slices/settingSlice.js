import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DBQueryer } from '../../dbqueryer/DBQueryer';
import { SettingModel } from '../../models';

const initialState = {
  name: "",
  year: "",
  incidences: []
};

const sm = new SettingModel();

export const loadSetting = createAsyncThunk(
  'setting/loadSettingStatus',
  async(data, thunkAPI) => {
    const { setting, year } = data;
    let cleanSetting;
    try {
      const dbSetting = await DBQueryer.getSetting(setting, year);
      const dbBsa = await DBQueryer.getBsa(setting);
      sm.loadSetting(dbSetting[0], dbBsa[0]);
      cleanSetting = sm.getSetting();
    }
    catch (e) {
      console.error(e);
    }
    /*
    */
    return cleanSetting;
  }
);

const settingSlice = createSlice({
  name: 'setting',
  initialState: initialState,
  reducers: {
    getSetting(state, action) {}
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSetting.fulfilled, (state, action) => {
        state.name = action.payload.setting;
        state.year = action.payload.year;
        state.incidences = action.payload.incidences;
        state.bodyStats = action.payload.bodyStats;
      })
  }
});

const { actions, reducer } = settingSlice;

export const { getSetting } = actions;

export default reducer;
