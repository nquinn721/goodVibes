import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Layout from 'goodVibes/constants/Layout';

import ExploreStack from './Explore.routes';
import SearchStack from './Search.routes';
import MyVibesStack from './MyVibes.routes';


export default createBottomTabNavigator({
  ExploreStack,
  SearchStack,
  MyVibesStack,
}, {
	tabBarOptions: {
		activeTintColor: Layout.primaryColor,
		style: {
			paddingHorizontal: 40
		}
	}
});
