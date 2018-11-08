import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from 'goodVibes/components/TabBarIcon';

import Dispensaries from 'goodVibes/screens/dispensaries';

const DispensariesStack = createStackNavigator({
  Dispensaries: Dispensaries.Dispensaries,
  Dispensary: Dispensaries.Dispensary,
  DispensaryMap: Dispensaries.DispensaryMap
});

DispensariesStack.navigationOptions = {
  tabBarLabel: 'Dispensaries',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='list'
    />
  ),
};


export default DispensariesStack;