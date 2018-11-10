import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
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
    <TabBarIcon
      focused={focused}
      name='star' 
    />
  ),
};


export default DiscoverStack;
