import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SvgUri from 'react-native-svg-uri';


import Explore from 'goodVibes/screens/explore';
import Product from 'goodVibes/screens/product';
import Review  from 'goodVibes/screens/review';


const Stack = createStackNavigator({
  	...Explore,
  	...Product,
  	...Review
});

Stack.navigationOptions = {
  // tabBarLabel: 'Explore',
  tabBarIcon: ({ focused, tintColor }) => (
    <SvgUri source={require('goodVibes/assets/images/Explore.svg')} fill={tintColor}/>
  ),
};


export default Stack;

