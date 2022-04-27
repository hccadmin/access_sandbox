import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  staticPage: false,
  results: false
}


const navigationSlice = createSlice({
  name: 'navigation',
  initialState: initialState,
  reducers: {
    setNavigation(state, action) {
      const resultArr = Object.entries(action.payload)[0];
      state[resultArr[0]] = resultArr[1];
    },
  }
});

const { actions, reducer } = navigationSlice;

export const { setNavigation } = actions;

export default reducer;
