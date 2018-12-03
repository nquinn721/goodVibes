const initialState = {
}



export default (state = initialState, action) => {
	switch (action.type) {
		case 'GETTING_DATA':
			return {
				...state,
				gotData: false
			}
		case 'GOT_DATA':{
			return {
				...state,
				gotData: true,
				...action.data
			}
		}
		default:
			return state;
	}
}