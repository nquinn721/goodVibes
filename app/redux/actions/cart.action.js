// import Service from './service';

export const addToCart = (data) => {
	return (dispatch) => {
		dispatch({type: 'ADD_TO_CART', data});
	}
}

export const removeFromCart = (data) => {
	return (dispatch) => {
		dispatch({type: 'REMOVE_FROM_CART', data});
	}
}

export const completeOrder = (id) => {
	return (dispatch) => {
		dispatch({type: 'COMPLETE_ORDER', id});
	}
}


