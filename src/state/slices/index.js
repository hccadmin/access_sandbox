import { combineReducers } from 'redux';
import cancersReducer from './cancersSlice';
import settingReducer from './settingSlice';
import userReducer from './userSlice';
import costsReducer from './costsSlice';

const rootReducer = combineReducers({
  cancers: cancersReducer,
  setting: settingReducer,
  costs: costsReducer,
  user: userReducer
});

export default rootReducer;
