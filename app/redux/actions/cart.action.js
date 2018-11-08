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

// export const updateSearchIndex = () => {
// 	return (dispatch) => {
// 		Service.dispatchGet(dispatch, 'user/update-search-index', {
// 			init: 'UPDATE_SEARCH_INDEX',
// 			success: 'UPDATE_SEARCH_INDEX_SUCCESS',
// 			error: 'UPDATE_SEARCH_INDEX_FAILED'
// 		});
// 	}
// }



