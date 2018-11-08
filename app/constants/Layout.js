import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  green: '#43c682',
  purple: '#1e1254',
  gold: '#ffb900',
  lightText: '#bababa'
};
