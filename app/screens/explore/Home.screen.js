import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import HorizontalList from 'goodVibes/components/HorizontalList';
import SvgUri from 'react-native-svg-uri';
import QuestionCard from 'goodVibes/components/QuestionCard';
import ProductCard from 'goodVibes/components/ProductCard';
import LookingForSomething from 'goodVibes/components/LookingForSomething';
import ReviewButton from 'goodVibes/components/ReviewButton';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { products : { products }, dispensaries: { dispensaries } } = this.props;

    return (
      <View style={Layout.container}>
        <ScrollView style={[Layout.container]}>
          <HorizontalList title="Popular Strains" data={products}/>
          <View style={styles.separator}></View>
          <HorizontalList title="Popular Products" type="product" data={products}/>
          <View style={styles.separator}></View>
          <QuestionCard title="Need Help?" question="I want to feel" answers='["Energized", "relaxed"]'/>
          <View style={styles.separator}></View>
          <ProductCard data={products[0]} />
          <View style={styles.separator}></View>
          <QuestionCard title="Medical Use" question="I am looking to better my" answers='["Depression", "Stress", "Fatigue", "Pain", "Headache", "Appetite"]'/>
          <View style={styles.separator}></View>
          <HorizontalList title="Despensaries Near by" type="dispensaries" data={dispensaries}/>
          <View style={styles.separator}></View>
          <LookingForSomething />
          <View style={{height: 50}}></View>
        </ScrollView>
        <ReviewButton />
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
  ({products, dispensaries}) => ({products, dispensaries})
)(HomeScreen);