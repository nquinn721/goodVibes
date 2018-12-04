import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SvgUri from 'react-native-svg-uri';


import Cart from 'goodVibes/screens/cart';
import UserRoutes from './User.routes';

const CartStack = createStackNavigator({
  Cart: Cart.Cart, 
  Checkout: Cart.Checkout,
  CompleteOrder: Cart.CompleteOrder,
  ...UserRoutes
});

CartStack.navigationOptions = {
  tabBarLabel: 'Bag',
  tabBarIcon: ({ focused, tintColor }) => (
    <SvgUri
      width="500"
      height="500"
      source={require('goodVibes/assets/images/nav_bag.svg')}
    />
  ),
};


export default CartStack;

