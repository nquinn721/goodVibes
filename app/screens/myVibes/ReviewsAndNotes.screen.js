import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import FilterHeader from './components/FilterHeader';


class MyVibesScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <View style={Layout.container}>
        <ScrollView style={[Layout.container]}>
          <FilterHeader />

        </ScrollView>
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
});



export default connect(
  // ({products, dispensaries}) => ({products, dispensaries})
)(MyVibesScreen);