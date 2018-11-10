import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from 'goodVibes/components/TabBarIcon';

import Cart from 'goodVibes/screens/cart';

const CartStack = createStackNavigator({
  Cart: Cart.Cart,
  Checkout: Cart.Checkout,
  CompleteOrder: Cart.CompleteOrder,
});

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='star'
    />
  ),
};


export default CartStack;

