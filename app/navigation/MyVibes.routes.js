import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SvgUri from 'react-native-svg-uri';


import MyVibes from 'goodVibes/screens/myVibes';

const Stack = createStackNavigator({
  ...MyVibes 
});

Stack.navigationOptions = {
  tabBarLabel: 'My Vibes',
  tabBarIcon: ({ focused, tintColor }) => (
    <SvgUri source={require('goodVibes/assets/images/My_Vibes.svg')} fill={tintColor}/>
  ),
};


export default Stack;

