import {combineReducers} from 'redux';
import strains from './strains.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
  strains,
  user,
});

export default rootReducer;