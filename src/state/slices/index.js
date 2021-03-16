import { combineReducers } from 'redux';
import cancersReducer from './cancersSlice';
import settingReducer from './settingSlice';
import userReducer from './userSlice';
import costsReducer from './costsSlice';
import uiReducer from './uiSlice';
import pricesReducer from './pricesSlice';

const rootReducer = combineReducers({
  cancers: cancersReducer,
  setting: settingReducer,
  costs: costsReducer,
  ui: uiReducer,
  prices: pricesReducer,
  user: userReducer
});

export default rootReducer;
