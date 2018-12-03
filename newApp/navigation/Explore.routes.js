import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SvgUri from 'react-native-svg-uri';


import Explore from 'goodVibes/screens/explore';

const CartStack = createStackNavigator({
  Home: Explore.Home, 
});

CartStack.navigationOptions = {
  tabBarLabel: 'Bag',
  tabBarIcon: ({ focused, tintColor }) => (
    <SvgUri
      width={21}
      height={23}
      source={require('goodVibes/assets/images/homer.svg')}
    />
  ),
};


export default CartStack;

