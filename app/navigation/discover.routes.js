import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from 'goodVibes/components/TabBarIcon';

import Discover from 'goodVibes/screens/discover';

const DiscoverStack = createStackNavigator({
  Discover: Discover.Discover,
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
