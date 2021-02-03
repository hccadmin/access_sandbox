import { combineReducers } from 'redux';
import cancersReducer from './cancersSlice';
import settingReducer from './settingSlice';
import userReducer from './userSlice';
import costsReducer from './costsSlice';
import uiReducer from './uiSlice';

const rootReducer = combineReducers({
  cancers: cancersReducer,
  setting: settingReducer,
  costs: costsReducer,
  ui: uiReducer,
  user: userReducer
});

export default rootReducer;
