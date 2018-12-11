import { combineReducers } from 'redux';
import user from './user.reducer';
import dispensaries from './dispensaries.reducer';
import products from './products.reducer';
import location from './location.reducer';

const rootReducer = combineReducers({
	user,
	dispensaries,
	products,
	location,
});

export default rootReducer;