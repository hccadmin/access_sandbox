import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: true
}


const loadingSlice = createSlice({
  name: 'loading',
  initialState: initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  }
});

const { actions, reducer } = loadingSlice;

export const { setLoading } = actions;

export default reducer;
