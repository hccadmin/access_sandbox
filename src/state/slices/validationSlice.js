import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ValidationHelper from '../../helpers/ValidationHelper';


const initialState = {
  hasErrors: false,
  incidence: false,
  riskSumError: false,
  risks: {},
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
      //state = JSON.parse( JSON.stringify(initialState));
      const { cancers, ...rest } = action.payload;
      const errors = vh.validateCancerInputs(cancers);
      //console.log(errors);
      state.hasErrors = errors.hasErrors;
      state.incidence = errors.incidence;
      state.riskSumError = errors.riskSumError;;
      state.risks = { ...errors.risks };
      state.regimens = { ...errors.regimens };
    },
    checkSelect(state, action) {
      const { riskStrat, regimen } = action.payload;
      if (regimen !== "0") {
        state.regimens[riskStrat] = false;
      }
    },
    disableError(state, action) {
      const errorType = action.payload;
      state.hasErrors = false;
      if (errorType === "risks" || errorType === "regimens" ) {
        if (Object.keys(state[errorType]).length > 0) {
        const keys = Object.keys(state[errorType]);
          keys.forEach( key => state[errorType][key] = false );
        }
      }
      else {
        state[errorType] = false;
      }
      const newState = JSON.parse( JSON.stringify(state));
      vh.resetStateErrors(newState);
    },
    resetErrors(state, action) {
    }
  }
});

const { actions, reducer } = validationSlice;

export const { validateCancerInputs, checkSelect, disableError, resetErrors } = actions;

export default reducer;
