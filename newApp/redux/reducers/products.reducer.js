const initialState = {
  originalProducts: [
    { 
      id: 1,
      dispensary: 'Potimus Maximus',
      img: 'https://ddd33q3967xhi.cloudfront.net/4CtN-0wO0aGYhHAezkU0YbydYgw=/fit-in/400x400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2feVjSEjGqQt2BHDeU4HLx_Hash+Haze.jpg', 
      name: 'Sea Breeze',
      type: 'Flower',
      cost: 44.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      rating: 4.5,
      totalRatings: 435,
      moods: {
        'Relaxed': 9,
        'Happy': 8.5,
        'Euphoric': 8.3,
        'Giggy': 5,
        'Uplifted': 7
      },
      medical: {
        'Depression': 3.5,
        'Stress': 4,
        'Fatigue': 5.3,
        'Pain': 7,
        'Headaches': 9
      },
      cons: {
        'Dry Mouth': 8.5,
        'Dry Eyes': 9,
        'Anxious': 8.3,
        'Paranoid': 5,
        'Dizzy': 5
      },
      discount: {
        percent: 10,
        originalPrice: 39.49
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
      img: 'https://ddd33q3967xhi.cloudfront.net/3MttCm0UsaX1T77IyziTpLhMrcI=/fit-in/400x400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2fQfzvYIfcR8mQ2cgcdvxK_Screen+Shot+2018-10-15+at+5.05.08+PM.png', 
      name: 'Select CBD Vaporizer Pens',
      type: 'CBD',
      cost: 44.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      rating: 4.5,
      totalRatings: 435,
      moods: {
        'Relaxed': 9,
        'Happy': 8.5,
        'Euphoric': 8.3,
        'Giggy': 5,
        'Uplifted': 7
      },
      medical: {
        'Depression': 3.5,
        'Stress': 4,
        'Fatigue': 5.3,
        'Pain': 7,
        'Headaches': 9
      },
      cons: {
        'Dry Mouth': 8.5,
        'Dry Eyes': 9,
        'Anxious': 8.3,
        'Paranoid': 5,
        'Dizzy': 5
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
      img: 'https://ddd33q3967xhi.cloudfront.net/jpk-JfL_vesIL1-xw5t9zY5QH2A=/fit-in/400x400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2fGQZ8Mh5WT2uS2wSrAkUg_24k+brownie.jpg', 
      name: 'Special Brownies',
      type: 'Edible',
      cost: 44.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      rating: 4.5,
      totalRatings: 435,
      moods: {
        'Relaxed': 9,
        'Happy': 8.5,
        'Euphoric': 8.3,
        'Giggy': 5,
        'Uplifted': 7
      },
      medical: {
        'Depression': 3.5,
        'Stress': 4,
        'Fatigue': 5.3,
        'Pain': 7,
        'Headaches': 9
      },
      cons: {
        'Dry Mouth': 8.5,
        'Dry Eyes': 9,
        'Anxious': 8.3,
        'Paranoid': 5,
        'Dizzy': 5
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
      img: 'https://ddd33q3967xhi.cloudfront.net/wIg3oDmnlI5czSeMDnCTiEVmlDo=/fit-in/168x168/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2fsD0OL2lbQoc3qJZmW3CO_K3086-2.jpg', 
      name: 'Psychodelic Dab Machine',
      type: 'Dabbing',
      cost: 44.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      rating: 4.5,
      totalRatings: 435,
      moods: {
        'Relaxed': 9,
        'Happy': 8.5,
        'Euphoric': 8.3,
        'Giggy': 5,
        'Uplifted': 7
      },
      medical: {
        'Depression': 3.5,
        'Stress': 4,
        'Fatigue': 5.3,
        'Pain': 7,
        'Headaches': 9
      },
      cons: {
        'Dry Mouth': 8.5,
        'Dry Eyes': 9,
        'Anxious': 8.3,
        'Paranoid': 5,
        'Dizzy': 5
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
      img: 'https://ddd33q3967xhi.cloudfront.net/4CtN-0wO0aGYhHAezkU0YbydYgw=/fit-in/400x400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2feVjSEjGqQt2BHDeU4HLx_Hash+Haze.jpg', 
      name: 'Afghan',
      type: 'oil',
      cost: 44.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      rating: 4.5,
      totalRatings: 435,
      moods: {
        'Relaxed': 9,
        'Happy': 8.5,
        'Euphoric': 8.3,
        'Giggy': 5,
        'Uplifted': 7
      },
      medical: {
        'Depression': 3.5,
        'Stress': 4,
        'Fatigue': 5.3,
        'Pain': 7,
        'Headaches': 9
      },
      cons: {
        'Dry Mouth': 8.5,
        'Dry Eyes': 9,
        'Anxious': 8.3,
        'Paranoid': 5,
        'Dizzy': 5
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
      img: 'https://ddd33q3967xhi.cloudfront.net/4CtN-0wO0aGYhHAezkU0YbydYgw=/fit-in/400x400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2feVjSEjGqQt2BHDeU4HLx_Hash+Haze.jpg', 
      name: 'Afghan',
      type: 'oil',
      cost: 44.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      rating: 4.5,
      totalRatings: 435,
      moods: {
        'Relaxed': 9,
        'Happy': 8.5,
        'Euphoric': 8.3,
        'Giggy': 5,
        'Uplifted': 7
      },
      medical: {
        'Depression': 3.5,
        'Stress': 4,
        'Fatigue': 5.3,
        'Pain': 7,
        'Headaches': 9
      },
      cons: {
        'Dry Mouth': 8.5,
        'Dry Eyes': 9,
        'Anxious': 8.3,
        'Paranoid': 5,
        'Dizzy': 5
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
      img: 'https://ddd33q3967xhi.cloudfront.net/4CtN-0wO0aGYhHAezkU0YbydYgw=/fit-in/400x400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2feVjSEjGqQt2BHDeU4HLx_Hash+Haze.jpg', 
      name: 'Afghan',
      type: 'oil',
      cost: 44.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      rating: 4.5,
      totalRatings: 435,
      moods: {
        'Relaxed': 9,
        'Happy': 8.5,
        'Euphoric': 8.3,
        'Giggy': 5,
        'Uplifted': 7
      },
      medical: {
        'Depression': 3.5,
        'Stress': 4,
        'Fatigue': 5.3,
        'Pain': 7,
        'Headaches': 9
      },
      cons: {
        'Dry Mouth': 8.5,
        'Dry Eyes': 9,
        'Anxious': 8.3,
        'Paranoid': 5,
        'Dizzy': 5
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
      img: 'https://ddd33q3967xhi.cloudfront.net/4CtN-0wO0aGYhHAezkU0YbydYgw=/fit-in/400x400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2feVjSEjGqQt2BHDeU4HLx_Hash+Haze.jpg', 
      name: 'Afghan',
      type: 'oil',
      cost: 44.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      rating: 4.5,
      totalRatings: 435,
      moods: {
        'Relaxed': 9,
        'Happy': 8.5,
        'Euphoric': 8.3,
        'Giggy': 5,
        'Uplifted': 7
      },
      medical: {
        'Depression': 3.5,
        'Stress': 4,
        'Fatigue': 5.3,
        'Pain': 7,
        'Headaches': 9
      },
      cons: {
        'Dry Mouth': 8.5,
        'Dry Eyes': 9,
        'Anxious': 8.3,
        'Paranoid': 5,
        'Dizzy': 5
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
      img: 'https://ddd33q3967xhi.cloudfront.net/4CtN-0wO0aGYhHAezkU0YbydYgw=/fit-in/400x400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2feVjSEjGqQt2BHDeU4HLx_Hash+Haze.jpg', 
      name: 'Afghan',
      type: 'oil',
      cost: 44.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      rating: 4.5,
      totalRatings: 435,
      moods: {
        'Relaxed': 9,
        'Happy': 8.5,
        'Euphoric': 8.3,
        'Giggy': 5,
        'Uplifted': 7
      },
      medical: {
        'Depression': 3.5,
        'Stress': 4,
        'Fatigue': 5.3,
        'Pain': 7,
        'Headaches': 9
      },
      cons: {
        'Dry Mouth': 8.5,
        'Dry Eyes': 9,
        'Anxious': 8.3,
        'Paranoid': 5,
        'Dizzy': 5
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
      img: 'https://ddd33q3967xhi.cloudfront.net/4CtN-0wO0aGYhHAezkU0YbydYgw=/fit-in/400x400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2feVjSEjGqQt2BHDeU4HLx_Hash+Haze.jpg', 
      name: 'Afghan',
      type: 'oil',
      cost: 44.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit at vehicula efficitur. Mauris pulvinar aliquet elit non venenatis. Curabitur nec sollicitudin sem, eget sagittis massa. ',
      rating: 4.5,
      totalRatings: 435,
      moods: {
        'Relaxed': 9,
        'Happy': 8.5,
        'Euphoric': 8.3,
        'Giggy': 5,
        'Uplifted': 7
      },
      medical: {
        'Depression': 3.5,
        'Stress': 4,
        'Fatigue': 5.3,
        'Pain': 7,
        'Headaches': 9
      },
      cons: {
        'Dry Mouth': 8.5,
        'Dry Eyes': 9,
        'Anxious': 8.3,
        'Paranoid': 5,
        'Dizzy': 5
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
  hotProducts: [],

  filterByDispensary: function(dispensary) {
    return this.products.filter(p => p.dispensary === dispensary);
  }

}

initialState.products = initialState.originalProducts;
initialState.hotProducts = initialState.originalProducts.slice(0, 4);

export default (state = initialState, action) => {
  let product;
  switch(action.type){
    case 'ADD_TO_CART':
       product = findProduct(action.data.id, state);
      product.addedToCart = true;
      return {
        ...state
      }
    case 'REMOVE_FROM_CART':
      product = findProduct(action.data.id, state);
      product.addedToCart = false;
      return {
        ...state
      }
    default:
      return state;
  }
}

const findProduct = (id, state) => state.products.filter(p => p.id === id)[0];
