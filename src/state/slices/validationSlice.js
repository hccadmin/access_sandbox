import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  incidence: false,
  risk_strats: {},
  regimens: {}
};


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
