import { combineReducers } from 'redux';
import user from './user';
import dispensaries from './dispensaries';

const rootReducer = combineReducers({
	user,
	dispensaries,
});

export default rootReducer;