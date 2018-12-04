import { combineReducers } from 'redux';
import user from './user.reducer';
import dispensaries from './dispensaries.reducer';
import products from './products.reducer';
import productList from './productList.reducer';
import cart from './cart.reducer';

const rootReducer = combineReducers({
	user,
	dispensaries,
	products,
	productList,
	cart,
});

export default rootReducer;