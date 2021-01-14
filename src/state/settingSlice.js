import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DBQueryer } from '../dbqueryer/DBQueryer';
import { SettingModel } from '../models';

const initialState = {
  selected: {}
};

const sm = new SettingModel();

export const loadSetting = createAsyncThunk(
  'setting/loadSettingStatus',
  async(thunkAPI) => {
    const dbSetting = await DBQueryer.getAll('cancers');
    //cm.loadSetting(dbSetting);
    return setting;
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
        state.setting = action.payload;
      })
  }
});

const { actions, reducer } = settingSlice;

export const { getSetting } = actions;

export default reducer;
