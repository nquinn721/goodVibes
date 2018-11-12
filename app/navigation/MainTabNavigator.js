import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Layout from 'goodVibes/constants/Layout';

import TabBarIcon from 'goodVibes/components/TabBarIcon';
import ProductsStack from './Products.routes';
import DiscoverStack from './Discover.routes';
import DispensariesStack from './Dispensaries.routes';
import CartStack from './Cart.routes';



export default createBottomTabNavigator({
  DiscoverStack,
  DispensariesStack,
  ProductsStack,
  CartStack,
}, {
	tabBarOptions: {
		activeTintColor: Layout.red
	}
});
