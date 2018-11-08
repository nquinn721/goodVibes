const img = require('../../assets/images/avatar.png');
const initialState = {
  dispensaries: [
    { 
      img: 'http://29eybu3o5gak2ec75b4c9aj7.wpengine.netdna-cdn.com/wp-content/uploads/2017/06/o-1.jpg', 
      name: 'Potimus Maximus',
      distance: '1.2 mi',
      stars: 4.5,
      totalRatings: 435
    },
    {
      img: 'http://29eybu3o5gak2ec75b4c9aj7.wpengine.netdna-cdn.com/wp-content/uploads/2017/06/o-1.jpg', 
      name: 'New aged weed',
      distance: '5.4 mi',
      stars: 4.2,
      totalRatings: 350
    },
    {
      img: 'http://29eybu3o5gak2ec75b4c9aj7.wpengine.netdna-cdn.com/wp-content/uploads/2017/06/o-1.jpg', 
      name: 'New aged weed',
      distance: '5.4 mi',
      stars: 4.2,
      totalRatings: 350
    },
    {
      img: 'http://29eybu3o5gak2ec75b4c9aj7.wpengine.netdna-cdn.com/wp-content/uploads/2017/06/o-1.jpg', 
      name: 'New aged weed',
      distance: '5.4 mi',
      stars: 4.2,
      totalRatings: 350
    },
    {
      img: 'http://29eybu3o5gak2ec75b4c9aj7.wpengine.netdna-cdn.com/wp-content/uploads/2017/06/o-1.jpg', 
      name: 'New aged weed',
      distance: '5.4 mi',
      stars: 4.2,
      totalRatings: 350
    },
    {
      img: 'http://29eybu3o5gak2ec75b4c9aj7.wpengine.netdna-cdn.com/wp-content/uploads/2017/06/o-1.jpg', 
      name: 'New aged weed',
      distance: '5.4 mi',
      stars: 4.2,
      totalRatings: 350
    }
  ]
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'GET_LOCAL_DISPENSARIES_SUCCESS':
      return {
        ...state,
        dispensariesFromYelp: action.data
      }
    default:
      return state;
  }
}
