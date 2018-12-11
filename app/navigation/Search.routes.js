import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SvgUri from 'react-native-svg-uri';


import Search from 'goodVibes/screens/search';
import Product from 'goodVibes/screens/product';

const Stack = createStackNavigator({
  ...Search,
  ...Product
});

Stack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused, tintColor }) => (
    <SvgUri source={require('goodVibes/assets/images/Search_Nav.svg')} fill={tintColor}/>
  ),
};


export default Stack;

