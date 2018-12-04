const img = require('../../assets/images/avatar.png');
const initialState = {
  orders: {},
  completeOrders: [],
  recentlyPurchasedItems: [],
  recentDispensaries: [],
  totalItems: 0,
  totalDispensaries: 0
}

export default (state = initialState, action) => {
  let order;

  switch(action.type){
    case 'ADD_TO_CART':
      order = state.orders[action.data.dispensary];
      if(!order){
      	order = state.orders[action.data.dispensary] = {
          id: Date.now(),
          items: [],
          dispensary: action.data.dispensary
        };
      }
      order.items.push(action.data);


      return {
      	...state,
      	totalItems: state.totalItems + 1,
      	totalDispensaries: Object.keys(state.orders).length
      };

    case 'REMOVE_FROM_CART':
    	order = state.orders[action.data.dispensary];

      if(order.items.length){
      	order.items.splice(order.items.indexOf(action.data), 1);
        state.totalItems--;
      }
    	if(order.items.length === 0){
    		state.totalDispensaries--;
        delete state.orders[action.data.dispensary];
    	}
    	return {
    		...state,
      }

    case 'COMPLETE_ORDER':
      order = getOrderById(action.id, state.orders);
      order.complete = true;
      state.completeOrders.push(order);
      state.recentlyPurchasedItems = state.recentlyPurchasedItems.concat(order.items);
      state.recentDispensaries = state.recentDispensaries.concat(order.dispensary);
      return {
        ...state,
      }
      
    default:
      return state;
  }
}


const getOrderById = (id, orders) => {
  for(let order in orders){
    if(orders[order].id === id)return orders[order];
  }
};


