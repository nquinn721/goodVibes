import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from 'goodVibes/components/TabBarIcon';
import ProductsStack from './products.routes';
import DiscoverStack from './discover.routes';
import DispensariesStack from './dispensaries.routes';
import CartStack from './cart.routes';



export default createBottomTabNavigator({
  DiscoverStack,
  DispensariesStack,
  ProductsStack,
  CartStack
});
