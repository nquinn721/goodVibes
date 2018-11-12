import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SvgUri from 'react-native-svg-uri';

import Discover from 'goodVibes/screens/discover';
import Dispensaries from 'goodVibes/screens/dispensaries';
import Products from 'goodVibes/screens/products';

const DiscoverStack = createStackNavigator({
  Discover: Discover.Discover,
  Dispensary: Dispensaries.Dispensary,
  Product: Products.Product
});

DiscoverStack.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ focused }) => (
    <SvgUri source={require('goodVibes/assets/images/nav_explore.svg')} />
  )
};


export default DiscoverStack;
