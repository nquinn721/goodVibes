import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, Image } from 'react-navigation';
import TabBarIcon from 'goodVibes/components/TabBarIcon';

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
    <Image source={require('goodVibes/assets/images/nav_explore.png')}/>
  ),
};


export default DiscoverStack;
