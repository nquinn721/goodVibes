const img = require('../../assets/images/avatar.png');
const initialState ={
  'Product Types': ['Flower', 'Vapes', 'Concentrates', 'Edible', 'CBD', 'Other'],
  'Experiences': ['Lift my Spirits', 'Stay Productive', 'Good Night Sleep', 'Social Anxiety', 'Motivate Mind', 'Get Active'],
  'Medical': ['Inflamation', 'Sleep Deprived', 'Cancer', 'Pain', 'Cant eat', 'Horny']
};

export default (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
}
