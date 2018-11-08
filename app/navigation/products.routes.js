import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from 'goodVibes/components/TabBarIcon';

import Products from 'goodVibes/screens/products';



const ProductsStack = createStackNavigator({
  Products: Products.Products,
  Product: Products.Product,
  Category: Products.Category,
});

ProductsStack.navigationOptions = {
  tabBarLabel: 'Products',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='square'
    />
  ),
};


export default ProductsStack;
