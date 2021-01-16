import { combineReducers } from 'redux';
import cancersReducer from './cancersSlice';
import settingReducer from './settingSlice';

const rootReducer = combineReducers({
  cancers: cancersReducer,
  setting: settingReducer
});

export default rootReducer;
