import { combineReducers } from 'redux';
import cancersReducer from './cancersSlice';
import settingReducer from './settingSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  cancers: cancersReducer,
  setting: settingReducer,
  user: userReducer
});

export default rootReducer;
