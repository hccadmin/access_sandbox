import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ValidationHelper from '../../helpers/ValidationHelper';

const initialState = {
  incidence: false,
  risk_strats: {},
  regimens: {}
};

/*
export const checkForErrors = createAsyncThunk(
  'validation/checkForErrorsStatus',
  async(data, thunkAPI) => {
  }
);
*/

const validationSlice = createSlice({
  name: 'validation',
  initialState: initialState,
  reducers: {
    setError(state, action) {
    },
    resetErrors(state, action) {
    }
  }
});

const { actions, reducer } = validationSlice;

export const { setError, resetErrors } = actions;

export default reducer;
