import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import RoundedImage from 'goodVibes/components/RoundedImage';
import SvgUri from 'react-native-svg-uri';


const Record = require('goodVibes/assets/images/Record.svg');


class MyVibesScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <View style={styles.reviewCard}>
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
  reviewCard: {
    ...Layout.card
  }
});



export default connect(
  // ({products, dispensaries}) => ({products, dispensaries})
)(MyVibesScreen);