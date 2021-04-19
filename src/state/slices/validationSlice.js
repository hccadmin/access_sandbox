import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ValidationHelper from '../../helpers/ValidationHelper';


const initialState = {
  hasErrors: false,
  incidence: false,
  risk_strats: {},
  regimens: {}
};

const initialCopy = { ...initialState };
const vh = new ValidationHelper(initialCopy);

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
    validateCancerInputs(state, action) {
      const { cancerHash, initialized, selected, ...cancers } = action.payload;
      const hasErrors = vh.validateCancerInputs(cancers);
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

export const { validateCancerInputs, setError, disableError, resetErrors } = actions;

export default reducer;
