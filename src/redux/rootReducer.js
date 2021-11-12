import { combineReducers } from 'redux';
import { currencyReducer } from './currencyReducer';
import { langReducer } from './langReducer';

export const rootReducer = combineReducers({
  currencyList: currencyReducer,
  lang: langReducer,
});
