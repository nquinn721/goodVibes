import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Products from 'goodVibes/screens/products';
import UserRoutes from './User.routes';



const ProductsStack = createStackNavigator({
  Products: Products.Products,
  Product: Products.Product, 
  Category: Products.Category,
  ...UserRoutes
});

ProductsStack.navigationOptions = {
  tabBarLabel: 'Products',
  tabBarIcon: ({ focused, tintColor }) => (
    <Image source={require('goodVibes/assets/images/nav_products.png')} style={{tintColor}} />

  ),
};


export default ProductsStack;
