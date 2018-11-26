import {combineReducers} from 'redux';
import strains from './strains.reducer';

const rootReducer = combineReducers({
  strains
});

export default rootReducer;