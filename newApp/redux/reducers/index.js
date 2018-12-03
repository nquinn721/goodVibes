import { combineReducers } from 'redux';
import user from './user.reducer';
import dispensaries from './dispensaries.reducer';
import products from './products.reducer';

const rootReducer = combineReducers({
	user,
	dispensaries,
	products,
});

export default rootReducer;