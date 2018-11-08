import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const purple = '#1e1254';

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  green: '#43c682',
  purple,
  gold: '#ffb900',
  lightText: '#bababa',
  mainButton: {backgroundColor: "#d8d8d8", padding: 15, marginTop: 20, borderRadius: 5, margin: 5},
  mainButtonText: {color: purple, textAlign: 'center'}
};
