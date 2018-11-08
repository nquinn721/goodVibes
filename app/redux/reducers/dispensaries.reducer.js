const img = require('../../assets/images/avatar.png');
const initialState = [
  { 
    img, 
    name: 'Potimus Maximus',
    distance: '1.2 mi',
    stars: 4.5,
    totalRatings: 435
  },
  {
    img, 
    name: 'New aged weed',
    distance: '5.4 mi',
    stars: 4.2,
    totalRatings: 350
  },
  {
    img, 
    name: 'New aged weed',
    distance: '5.4 mi',
    stars: 4.2,
    totalRatings: 350
  },
  {
    img, 
    name: 'New aged weed',
    distance: '5.4 mi',
    stars: 4.2,
    totalRatings: 350
  },
  {
    img, 
    name: 'New aged weed',
    distance: '5.4 mi',
    stars: 4.2,
    totalRatings: 350
  },
  {
    img, 
    name: 'New aged weed',
    distance: '5.4 mi',
    stars: 4.2,
    totalRatings: 350
  }
]

export default (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
}
