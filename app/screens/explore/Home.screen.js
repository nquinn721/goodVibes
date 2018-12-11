import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import HorizontalList from 'goodVibes/components/HorizontalList';
import SvgUri from 'react-native-svg-uri';
import QuestionCard from 'goodVibes/components/QuestionCard';
import ProductCard from 'goodVibes/components/ProductCard';
import LookingForSomething from 'goodVibes/components/LookingForSomething';
import ScrollViewAction from 'goodVibes/components/ScrollViewAction';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  


  render() {
    const { products : { products }, dispensaries: { dispensaries } } = this.props;
    return (
        <ScrollViewAction>
          <HorizontalList title="Popular Strains" data={products} onPress={(product) => 
            this.props.navigation.navigate('ProductDetail', {product, type: 'strain'})
          }/>
          <View style={styles.separator} />
          <HorizontalList title="Popular Products" type="product" data={products} onPress={(product) => 
            this.props.navigation.navigate('ProductDetail', {product, type: 'product'})
          }/>
          <View style={styles.separator} />
          <QuestionCard title="Need Help?" question="I want to feel" answers='["Energized", "relaxed"]'/>
          <View style={styles.separator} />
          <ProductCard product={products[0]} navigation={this.props.navigation}/>
          <View style={styles.separator} />
          <QuestionCard title="Medical Use" question="I am looking to better my" answers='["Depression", "Stress", "Fatigue", "Pain", "Headache", "Appetite"]'/>
          <View style={styles.separator} />
          <HorizontalList title="Despensaries Near by" type="dispensary" data={dispensaries} onPress={(product) => 
            this.props.navigation.navigate('ProductDetail', {product, type: 'dispensary'})
          }/>
          <View style={styles.separator} />
          <LookingForSomething />
          <View style={{height: 50}}></View>
        </ScrollViewAction>
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