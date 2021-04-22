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
      const { 
        cancerHash, 
        initialized, 
        selected, 
        cancerButtonClicks,
        ...cancers 
      } = action.payload;
      const errors = vh.validateCancerInputs(cancers);
      //console.log(cancers);
      //state.hasErrors = errors.hasErrors;
      //state.incidence = errors.incidence;
      //state.risk_strats = { ...errors.risk_strats };
      //state.regimens = { ...errors.regimens };
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
      state[errorType] = false;
      const newState = JSON.parse( JSON.stringify(state));
      vh.resetErrors(newState);
    },
    resetErrors(state, action) {
    }
  }
});

const { actions, reducer } = validationSlice;

export const { validateCancerInputs, checkSelect, disableError, resetErrors } = actions;

export default reducer;
