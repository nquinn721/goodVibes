import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
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
  y = 0;


  state = {
    scrollDirection: 'up'
  }

  scroll(e){
    const { y } = e.nativeEvent.contentOffset;
    const scrollDirection = y > this.y ? 'down' : 'up';
    
    if(scrollDirection !== this.state.scrollDirection && y > 0)
      this.setState({scrollDirection});

    this.y = y;
  }


  render() {
    const { products : { products }, dispensaries: { dispensaries } } = this.props;
    return (
      <View style={[Layout.container]}>
        <ScrollView 
            style={[Layout.container, {backgroundColor: Layout.bgColor}]} 
            scrollEventThrottle={300}
            showsVerticalScrollIndicator={false} 
            onMomentumScrollBegin={this.momentum}
            onScroll={this.scroll.bind(this)}>

          <HorizontalList title="Popular Strains" data={products} onPress={() => {
            console.log('woeifh');
            this.props.navigation.navigate('ProductDetail')
          }}/>
          <View style={styles.separator} />
          <HorizontalList title="Popular Products" type="product" data={products} onPress={() => this.props.navigation.navigate('ProductDetail')}/>
          <View style={styles.separator} />
          <QuestionCard title="Need Help?" question="I want to feel" answers='["Energized", "relaxed"]'/>
          <View style={styles.separator} />
          <ProductCard data={products[0]} />
          <View style={styles.separator} />
          <QuestionCard title="Medical Use" question="I am looking to better my" answers='["Depression", "Stress", "Fatigue", "Pain", "Headache", "Appetite"]'/>
          <View style={styles.separator} />
          <HorizontalList title="Despensaries Near by" type="dispensaries" data={dispensaries}/>
          <View style={styles.separator} />
          <LookingForSomething />
          <View style={{height: 50}}></View>
        </ScrollView>
        {this.state.scrollDirection === 'up' && <ReviewButton />}
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