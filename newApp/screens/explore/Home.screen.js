import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import HorizontalList from 'goodVibes/components/HorizontalList';
import SvgUri from 'react-native-svg-uri';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { products } = this.props;

    return (
      <View style={[Layout.container]}>
        <HorizontalList title="Popular Strains" data={products.products}/>
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
  
});



export default connect(
  ({products}) => ({products})
)(HomeScreen);