import { combineReducers } from 'redux';
import user from './user.reducer';
import dispensaries from './dispensaries.reducer';

const rootReducer = combineReducers({
	user,
	dispensaries,
});

export default rootReducer;