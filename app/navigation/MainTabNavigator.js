import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import ExploreStack from './Explore.routes';
import SearchStack from './Search.routes';
import MyVibesStack from './MyVibes.routes';


export default createBottomTabNavigator({
  ExploreStack,
  SearchStack,
  MyVibesStack,
});
