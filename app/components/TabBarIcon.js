import React from 'react';
import { Icon } from 'expo';
import { Platform } from 'react-native';
import Colors from 'goodVibes/constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={Platform.OS === 'ios' ? `ios-${this.props.name}` : `md-${this.props.name}`}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}