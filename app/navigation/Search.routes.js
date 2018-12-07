import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SvgUri from 'react-native-svg-uri';


import Search from 'goodVibes/screens/search';

const Stack = createStackNavigator({
  Search: Search.Search, 
});

Stack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused, tintColor }) => (
    <SvgUri source={require('goodVibes/assets/images/Search_Nav.svg')} fill={tintColor}/>
  ),
};


export default Stack;

