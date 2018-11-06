import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Discover from '../screens/Discover';
import Dispenseries from '../screens/dispenseries/Dispenseries';
import SettingsScreen from '../screens/SettingsScreen';

const DiscoverStack = createStackNavigator({
  Discover: Discover,
});

DiscoverStack.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-star${focused ? '' : '-outline'}`
          : 'md-star' 
      }
    />
  ),
};

const DispenseriesStack = createStackNavigator({
  Dispenseries: Dispenseries,
});

DispenseriesStack.navigationOptions = {
  tabBarLabel: 'Dispenseries',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-square' : 'md-square'}
    />
  ),
};

export default createBottomTabNavigator({
  DiscoverStack,
  DispenseriesStack,
  SettingsStack,
});
