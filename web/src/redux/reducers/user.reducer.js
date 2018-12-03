const initialState = {
}



export default (state = initialState, action) => {
	
	switch (action.type) {
		case 'LOGGING_IN':
			return {
				...state,
				loggingIn: true
			}
		case 'LOGGED_IN':
			return {
				...state,
				user: action.data
			}
		default:
			return state;
	}
}