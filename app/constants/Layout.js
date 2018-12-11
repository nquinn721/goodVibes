import { Dimensions } from 'react-native';
import Colors from './Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const cardShadow = {
  shadowOffset: {  width: 0,  height: 0,  },
  shadowColor: 'black',
  shadowOpacity: .17,
  elevation: 1,
  shadowRadius: 4
}


export default {
  window: {
    width,
    height,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
  card: {
    backgroundColor: 'white',
    ...cardShadow
  },
  paddedCard: {
    backgroundColor: 'white',
    padding: 30,
    ...cardShadow
  },
  paddedCard: {
    backgroundColor: 'white',
    padding: 30,
    ...cardShadow
  },
  cardShadow,
  centered: {
  	alignItems: 'center', 
  	justifyContent: 'center'
  },
  isSmallDevice: width < 375,
  ...Colors,
};
