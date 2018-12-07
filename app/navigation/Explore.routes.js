import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SvgUri from 'react-native-svg-uri';


import Explore from 'goodVibes/screens/explore';
import Product from 'goodVibes/screens/product';


const Stack = createStackNavigator({
 	Product: Product.Product,
  	Home: Explore.Home, 
});

Stack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused, tintColor }) => (
    <SvgUri source={require('goodVibes/assets/images/Artboard.svg')} />
  ),
};


export default Stack;

