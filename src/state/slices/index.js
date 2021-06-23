import { combineReducers } from 'redux';
import cancerDataReducer from './cancerDataSlice';
import settingReducer from './settingSlice';
import cancerSelectionsReducer from './cancerSelectionsSlice';
import costsReducer from './costsSlice';
import validationReducer from './validationSlice';
import uiReducer from './uiSlice';
import pricesReducer from './pricesSlice';

const rootReducer = combineReducers({
  cancerData: cancerDataReducer,
  setting: settingReducer,
  validation: validationReducer,
  costs: costsReducer,
  ui: uiReducer,
  prices: pricesReducer,
  cancerSelections: cancerSelectionsReducer
});

export default rootReducer;
