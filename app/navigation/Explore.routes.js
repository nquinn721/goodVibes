import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SvgUri from 'react-native-svg-uri';


import Explore from 'goodVibes/screens/explore';

const Stack = createStackNavigator({
  Home: Explore.Home, 
});

Stack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused, tintColor }) => (
    <SvgUri source={require('goodVibes/assets/images/Artboard.svg')} />
  ),
};


export default Stack;

