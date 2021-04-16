import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ValidationHelper from '../../helpers/ValidationHelper';

const vh = new ValidationHelper();

const initialState = {
  hasErrors: false,
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
    validate(state, action) {
      const { cancerHash, initialized, selected, ...cancers } = action.payload;
      const hasErrors = vh.validate(cancers);
      state.hasErrors = hasErrors;
      state.incidence = hasErrors;
    },
    setError(state, action) {
    },
    disableError(state, action) {
      const errorType = action.payload;
      state.hasErrors = false;
      state[errorType] = false;
    },
    resetErrors(state, action) {
    }
  }
});

const { actions, reducer } = validationSlice;

export const { validate, setError, disableError, resetErrors } = actions;

export default reducer;
