import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import Card from './Card';
import Searching from './Searching';
import HorizontalList from 'goodVibes/components/HorizontalList';

export default class QuestionCard extends React.Component{
	state = {
		data
	}
	render(){
		const { cardChosen, doneSearching } = this.state;

		return (
			<View>
				{
					!cardChosen ?
						<Card {...this.props} onPress={(cardChosen) => 
							setTimeout(() => 
								this.setState({cardChosen}), 300)}/>		
						:
					!doneSearching ?
						<Searching onFinish={(data) => this.setState({doneSearching: true, data})}/>
						:
						<HorizontalList title={cardChosen} data={data} type="quiz" onPress={() => this.setState({doneSearching: false, cardChosen: false})}/>
				}
			</View>
        )
	}

}



const styles = StyleSheet.create({
	container: {
	}
});


const data = [
    { 
      id: 1,
      dispensary: 'Potimus Maximus',
      img: 'https://www.alchimiaweb.com/images/xl/cookies-and-weed_8736_1_.jpg', 
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
      img: 'https://www.alchimiaweb.com/images/xl/cookies-and-weed_8736_1_.jpg', 
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
      img: 'https://www.alchimiaweb.com/images/xl/cookies-and-weed_8736_1_.jpg', 
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
      img: 'https://www.alchimiaweb.com/images/xl/cookies-and-weed_8736_1_.jpg', 
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
      img: 'https://www.alchimiaweb.com/images/xl/cookies-and-weed_8736_1_.jpg', 
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
      img: 'https://www.alchimiaweb.com/images/xl/cookies-and-weed_8736_1_.jpg', 
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
      img: 'https://www.alchimiaweb.com/images/xl/cookies-and-weed_8736_1_.jpg', 
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
      img: 'https://www.alchimiaweb.com/images/xl/cookies-and-weed_8736_1_.jpg', 
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
      img: 'https://www.alchimiaweb.com/images/xl/cookies-and-weed_8736_1_.jpg', 
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
      img: 'https://www.alchimiaweb.com/images/xl/cookies-and-weed_8736_1_.jpg', 
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
    
  ]
