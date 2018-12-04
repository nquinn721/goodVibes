import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import SvgUri from 'react-native-svg-uri';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={[Layout.container, Layout.centered]}>
        <SvgUri source={require('goodVibes/assets/images/Artboard.svg')} />
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
  
});
