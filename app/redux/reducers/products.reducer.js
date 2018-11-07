const img = require('../../assets/images/avatar.png');
const initialState = [
  { 
    img, 
    name: 'Potimus Maximus',
    distance: 1.2,
    stars: 4.5,
    totalRatings: 435
  }
  
]

export default (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
}
