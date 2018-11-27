const initialState = {
}



export default (state = initialState, action) => {
	switch (action.type) {
		case 'GOT_STRAIN_DATA':{
			return {
				...state,
				strains: action.data
			}
		}
		default:
			return state;
	}
}