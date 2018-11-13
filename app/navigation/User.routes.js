import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from 'goodVibes/components/TabBarIcon';

import User from 'goodVibes/screens/user';

const UserStack = createStackNavigator({
  User: User.User,
  Account: User.Account, 
  LoggedExperiences: User.LoggedExperiences,
  Settings: User.Settings,
});

UserStack.navigationOptions = {
};


export default UserStack;

