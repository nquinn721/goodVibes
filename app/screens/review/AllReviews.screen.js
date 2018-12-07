import React from 'react';
import { StyleSheet, View, ScrollView, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import SvgUri from 'react-native-svg-uri';
import Reviews from 'goodVibes/components/Reviews';
import Header from 'goodVibes/components/Header';
import StarsLine from 'goodVibes/components/generic/StarsLine';

class AllReviews extends React.Component {
  static navigationOptions = {
    header: null,
  };

  

  render() {
    const product = this.props.navigation.getParam('product');

    return(
      <ScrollView style={Layout.container}>
        <Header title={product.name} navigation={this.props.navigation} short={true} showTitle={true} rightIcon="edit"/>

        {/* SLIDERS */}
        <View style={Layout.paddedCard}>
          <StarsLine stars={5} num={8} />
          <View style={{height: 20}} />
          <StarsLine stars={4} num={9} />
          <View style={{height: 20}} />
          <StarsLine stars={3} num={6} />
          <View style={{height: 20}} />
          <StarsLine stars={2} num={5} />
          <View style={{height: 20}} />
          <StarsLine stars={1} num={1} />
        </View>
        {/* END SLIDERS */}
        <View style={{height: 20}} />


        <Reviews full={true} />
      </ScrollView>
    );
  }

 
}

const styles = StyleSheet.create({
    
    
});



export default connect(
  ({products}) => ({products})
)(AllReviews);