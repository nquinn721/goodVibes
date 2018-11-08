const img = require('../../assets/images/avatar.png');
const initialState = {
  items: {},
  totalItems: 0,
  totalDispensaries: 0
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TO_CART':
      if(!state.items[action.data.dispensary]){
      	state.items[action.data.dispensary] = [];
      }
      state.items[action.data.dispensary].push(action.data);


      return {
      	...state,
      	totalItems: state.totalItems + 1,
      	totalDispensaries: Object.keys(state.items).length
      };

    case 'REMOVE_FROM_CART':
    	const dispensary = state.items[action.data.dispensary];

      if(dispensary.length){
      	dispensary.splice(dispensary.indexOf(action.data), 1);
        state.totalItems--;
      }
    	if(dispensary.length === 0){
    		state.totalDispensaries--;
        delete state.items[action.data.dispensary];
    	}
    	return {
    		...state,
    	}
    default:
      return state;
  }
}
