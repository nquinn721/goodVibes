import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import ExploreStack from './Explore.routes';


export default createBottomTabNavigator({
  ExploreStack,
});
