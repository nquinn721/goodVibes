import { Dimensions } from 'react-native';
import Colors from './Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const purple = '#1e1254';
const red = '#ff5a5f';
const cardShadow = {
  shadowOffset: {  width: 0,  height: 0,  },
  shadowColor: 'black',
  shadowOpacity: .17,
  shadowRadius: 4
}


export default {
  window: {
    width,
    height,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardShadow,
  centered: {
  	alignItems: 'center', 
  	justifyContent: 'center'
  },
  isSmallDevice: width < 375,
};
