import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Dispensaries from 'goodVibes/screens/dispensaries';
import Products from 'goodVibes/screens/products';

const DispensariesStack = createStackNavigator({
  Dispensaries: Dispensaries.Dispensaries,
  Dispensary: Dispensaries.Dispensary, 
  DispensaryMap: Dispensaries.DispensaryMap,
  Product: Products.Product
});

DispensariesStack.navigationOptions = {
  tabBarLabel: 'Dispensaries',
  tabBarIcon: ({ focused, tintColor }) => (
    <Image source={require('goodVibes/assets/images/nav_dispen.png')} style={{tintColor}} />
  ),
};


export default DispensariesStack;