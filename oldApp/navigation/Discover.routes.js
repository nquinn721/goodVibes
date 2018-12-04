import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from 'goodVibes/components/TabBarIcon';

import Discover from 'goodVibes/screens/discover';
import Dispensaries from 'goodVibes/screens/dispensaries';
import Products from 'goodVibes/screens/products';
import UserRoutes from './User.routes';

const img = require('goodVibes/assets/images/nav_explore.png');

const DiscoverStack = createStackNavigator({
  Discover: Discover.Discover,
  Dispensary: Dispensaries.Dispensary,
  Product: Products.Product,
  ...UserRoutes
});

DiscoverStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused, tintColor }) => (
    <Image source={img} style={{tintColor}}/>
  ),
};


export default DiscoverStack;
