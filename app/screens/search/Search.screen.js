import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';

class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <View style={Layout.container}>
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
    separator: {
      height: 20,
    }
});



export default connect(
  // ({products, dispensaries}) => ({products, dispensaries})
)(SearchScreen);