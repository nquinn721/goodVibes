const img = require('../../assets/images/avatar.png');
const initialState = {
  originalProducts: [
    { 
      id: 1,
      dispensary: 'Potimus Maximus',
      img, 
      name: '1:1 [1oz] (150mg CBD/150mg THC)',
      type: 'oil',
      cost: 45,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      stars: 4.5,
      totalRatings: 435,
      moods: {
        happy: 8.5,
        relaxed: 9,
        euphoric: 8.3,
        giggy: 5
      },
      addedToCart: false,
      canAddToCart: true,
      images: [
        'http://www.discovercannabis.ca/wp-content/uploads/2018/07/marijuana-2174302_960_720.jpg',
        'https://media.wired.com/photos/5be236741499d6407e2e5ca2/master/pass/marijuana-515319110.jpg',
        'https://media2.fdncms.com/portmerc/imager/u/large/19820795/origin_7-points-oregon-staff.jpg'
      ]
    },
    { 
      id: 2,
      dispensary: 'Potimus Maximus',
      img, 
      name: '1:1 [1oz] (150mg CBD/150mg THC)',
      type: 'oil',
      cost: 45,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      stars: 4.5,
      totalRatings: 435,
      moods: {
        happy: 8.5,
        relaxed: 9,
        euphoric: 8.3,
        giggy: 5
      },
      addedToCart: false,
      canAddToCart: true,
      images: [
        'http://www.discovercannabis.ca/wp-content/uploads/2018/07/marijuana-2174302_960_720.jpg',
        'https://media.wired.com/photos/5be236741499d6407e2e5ca2/master/pass/marijuana-515319110.jpg',
        'https://media2.fdncms.com/portmerc/imager/u/large/19820795/origin_7-points-oregon-staff.jpg'
      ]
    },
    { 
      id: 3,
      dispensary: 'Potimus Maximus',
      img, 
      name: '1:1 [1oz] (150mg CBD/150mg THC)',
      type: 'oil',
      cost: 45,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      stars: 4.5,
      totalRatings: 435,
      moods: {
        happy: 8.5,
        relaxed: 9,
        euphoric: 8.3,
        giggy: 5
      },
      addedToCart: false,
      canAddToCart: true,
      images: [
        'http://www.discovercannabis.ca/wp-content/uploads/2018/07/marijuana-2174302_960_720.jpg',
        'https://media.wired.com/photos/5be236741499d6407e2e5ca2/master/pass/marijuana-515319110.jpg',
        'https://media2.fdncms.com/portmerc/imager/u/large/19820795/origin_7-points-oregon-staff.jpg'
      ]
    },
    { 
      id: 4,
      dispensary: 'Potimus Maximus',
      img, 
      name: '1:1 [1oz] (150mg CBD/150mg THC)',
      type: 'oil',
      cost: 45,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      stars: 4.5,
      totalRatings: 435,
      moods: {
        happy: 8.5,
        relaxed: 9,
        euphoric: 8.3,
        giggy: 5
      },
      addedToCart: false,
      canAddToCart: true,
      images: [
        'http://www.discovercannabis.ca/wp-content/uploads/2018/07/marijuana-2174302_960_720.jpg',
        'https://media.wired.com/photos/5be236741499d6407e2e5ca2/master/pass/marijuana-515319110.jpg',
        'https://media2.fdncms.com/portmerc/imager/u/large/19820795/origin_7-points-oregon-staff.jpg'
      ]
    },
    { 
      id: 5,
      dispensary: 'New aged weed',
      img, 
      name: '1:1 [1oz] (150mg CBD/150mg THC)',
      type: 'oil',
      cost: 45,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      stars: 4.5,
      totalRatings: 435,
      moods: {
        happy: 8.5,
        relaxed: 9,
        euphoric: 8.3,
        giggy: 5
      },
      addedToCart: false,
      canAddToCart: true,
      images: [
        'http://www.discovercannabis.ca/wp-content/uploads/2018/07/marijuana-2174302_960_720.jpg',
        'https://media.wired.com/photos/5be236741499d6407e2e5ca2/master/pass/marijuana-515319110.jpg',
        'https://media2.fdncms.com/portmerc/imager/u/large/19820795/origin_7-points-oregon-staff.jpg'
      ]
    },
    { 
      id: 6,
      dispensary: 'New aged weed',
      img, 
      name: '1:1 [1oz] (150mg CBD/150mg THC)',
      type: 'oil',
      cost: 45,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      stars: 4.5,
      totalRatings: 435,
      moods: {
        happy: 8.5,
        relaxed: 9,
        euphoric: 8.3,
        giggy: 5
      },
      addedToCart: false,
      canAddToCart: true,
      images: [
        'http://www.discovercannabis.ca/wp-content/uploads/2018/07/marijuana-2174302_960_720.jpg',
        'https://media.wired.com/photos/5be236741499d6407e2e5ca2/master/pass/marijuana-515319110.jpg',
        'https://media2.fdncms.com/portmerc/imager/u/large/19820795/origin_7-points-oregon-staff.jpg'
      ]
    },
    { 
      id: 7,
      dispensary: 'New aged weed',
      img, 
      name: '1:1 [1oz] (150mg CBD/150mg THC)',
      type: 'oil',
      cost: 45,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      stars: 4.5,
      totalRatings: 435,
      moods: {
        happy: 8.5,
        relaxed: 9,
        euphoric: 8.3,
        giggy: 5
      },
      addedToCart: false,
      canAddToCart: true,
      images: [
        'http://www.discovercannabis.ca/wp-content/uploads/2018/07/marijuana-2174302_960_720.jpg',
        'https://media.wired.com/photos/5be236741499d6407e2e5ca2/master/pass/marijuana-515319110.jpg',
        'https://media2.fdncms.com/portmerc/imager/u/large/19820795/origin_7-points-oregon-staff.jpg'
      ]
    },
    { 
      id: 8,
      dispensary: 'New aged weed',
      img, 
      name: '1:1 [1oz] (150mg CBD/150mg THC)',
      type: 'oil',
      cost: 45,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      stars: 4.5,
      totalRatings: 435,
      moods: {
        happy: 8.5,
        relaxed: 9,
        euphoric: 8.3,
        giggy: 5
      },
      addedToCart: false,
      canAddToCart: true,
      images: [
        'http://www.discovercannabis.ca/wp-content/uploads/2018/07/marijuana-2174302_960_720.jpg',
        'https://media.wired.com/photos/5be236741499d6407e2e5ca2/master/pass/marijuana-515319110.jpg',
        'https://media2.fdncms.com/portmerc/imager/u/large/19820795/origin_7-points-oregon-staff.jpg'
      ]
    },
    { 
      id: 9,
      dispensary: 'New aged weed',
      img, 
      name: '1:1 [1oz] (150mg CBD/150mg THC)',
      type: 'oil',
      cost: 45,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      stars: 4.5,
      totalRatings: 435,
      moods: {
        happy: 8.5,
        relaxed: 9,
        euphoric: 8.3,
        giggy: 5
      },
      addedToCart: false,
      canAddToCart: true,
      images: [
        'http://www.discovercannabis.ca/wp-content/uploads/2018/07/marijuana-2174302_960_720.jpg',
        'https://media.wired.com/photos/5be236741499d6407e2e5ca2/master/pass/marijuana-515319110.jpg',
        'https://media2.fdncms.com/portmerc/imager/u/large/19820795/origin_7-points-oregon-staff.jpg'
      ]
    },
    { 
      id: 10,
      dispensary: 'New aged weed',
      img, 
      name: '1:1 [1oz] (150mg CBD/150mg THC)',
      type: 'oil',
      cost: 45,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      stars: 4.5,
      totalRatings: 435,
      moods: {
        happy: 8.5,
        relaxed: 9,
        euphoric: 8.3,
        giggy: 5
      },
      addedToCart: false,
      canAddToCart: true,
      images: [
        'http://www.discovercannabis.ca/wp-content/uploads/2018/07/marijuana-2174302_960_720.jpg',
        'https://media.wired.com/photos/5be236741499d6407e2e5ca2/master/pass/marijuana-515319110.jpg',
        'https://media2.fdncms.com/portmerc/imager/u/large/19820795/origin_7-points-oregon-staff.jpg'
      ]
    }
    
  ],
  products: [],

  filterByDispensary: function(dispensary) {
    return this.products.filter(p => p.dispensary === dispensary);
  }

}

initialState.products = initialState.originalProducts;

export default (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TO_CART':
      let product = findProduct(action.data.id, state);
      product.addedToCart = true;
      return {
        ...state
      }
    default:
      return state;
  }
}

const findProduct = (id, state) => state.products.filter(p => p.id === id)[0];
