const initialState = {
  dispensaries: [
    { 
      id: 1,
      img: 'data:image/jpeg;base64,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', 
      name: 'Potimus Maximus',
      distance: '1.2 mi',
      rating: 4.5,
      totalRatings: 435
    },
    {
      id: 1,
      img: 'http://29eybu3o5gak2ec75b4c9aj7.wpengine.netdna-cdn.com/wp-content/uploads/2017/06/o-1.jpg', 
      name: 'New aged weed',
      distance: '5.4 mi',
      rating: 4.2,
      totalRatings: 350
    },
    {
      id: 1,
      img: 'http://29eybu3o5gak2ec75b4c9aj7.wpengine.netdna-cdn.com/wp-content/uploads/2017/06/o-1.jpg', 
      name: 'Get high and fly dispensary',
      distance: '5.4 mi',
      rating: 4.2,
      totalRatings: 350
    },
    {
      id: 1,
      img: 'http://29eybu3o5gak2ec75b4c9aj7.wpengine.netdna-cdn.com/wp-content/uploads/2017/06/o-1.jpg', 
      name: 'New aged weed',
      distance: '5.4 mi',
      rating: 4.2,
      totalRatings: 350
    },
    {
      id: 1,
      img: 'http://29eybu3o5gak2ec75b4c9aj7.wpengine.netdna-cdn.com/wp-content/uploads/2017/06/o-1.jpg', 
      name: 'New aged weed',
      distance: '5.4 mi',
      rating: 4.2,
      totalRatings: 350
    },
    {
      id: 1,
      img: 'http://29eybu3o5gak2ec75b4c9aj7.wpengine.netdna-cdn.com/wp-content/uploads/2017/06/o-1.jpg', 
      name: 'New aged weed',
      distance: '5.4 mi',
      rating: 4.2,
      totalRatings: 350
    }
  ],
  getDispensaryByName: function(dispensary) {
    return this.dispensaries.filter(d => d.name === dispensary)[0]
  }
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'GET_LOCAL_DISPENSARIES_SUCCESS':
      return {
        ...state,
        dispensariesFromYelp: action.data
      }
    case 'GET_DISPENSARIES_SUCCESS':
      return {
        ...state,
        dispensaries: action.data
      }
    default:
      return state;
  }
}
