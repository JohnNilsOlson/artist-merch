import formVisibleOnPageReducer from './form-visible-reducer';
import merchListReducer from './merch-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterMerchList: merchListReducer,
  formVisibleOnPage: formVisibleOnPageReducer
});

export default rootReducer;