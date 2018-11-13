import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const purple = '#1e1254';
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
    backgroundColor: '#f7f7f7',
  },
  pink: '#ff5a5f',
  red: '#ff5a5f',
  isSmallDevice: width < 375,
  green: '#43c682',
  purple,
  gold: '#ffb900',
  darkGrey: '#666666',
  mediumGrey: '#b8b8b8',
  lightGrey: '#f0f0f0',
  lightText: '#bababa',
  roundedButton: {
    borderRadius: 50, 
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    ...cardShadow
  },
  cardShadow: cardShadow,
  emptyCard: {padding: 20, backgroundColor: 'white', borderRadius: 5, ...cardShadow},
  mainButton: {backgroundColor: "#d8d8d8", padding: 15, marginTop: 20, borderRadius: 5, margin: 5},
  mainButtonText: {color: purple, textAlign: 'center'}
};
