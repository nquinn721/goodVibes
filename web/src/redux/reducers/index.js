import {combineReducers} from 'redux';
import data from './data.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
  data,
  user,
});

export default rootReducer;