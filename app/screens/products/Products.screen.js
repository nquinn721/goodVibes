import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import SearchBar from 'goodVibes/components/SearchBar';
import Layout from 'goodVibes/constants/Layout';

const img = require('goodVibes/assets/images/Products_gradientOnly.jpg');

class Products extends React.Component {
  static navigationOptions = {
  	header: null
  };

  render() {
  	const { productList } = this.props;

  	return (
  		<ScrollView style={Layout.container}>
        <SearchBar navigation={this.props.navigation}/>
  			{
  				Object.keys(productList).map((list, i) => {
  					return (
  						<View key={i}>
  							<Text style={{fontSize: 18, color: Layout.purple, paddingTop: 30, paddingLeft: 15, paddingBottom: 15, fontWeight: '700'}}>{list}</Text>
  							<View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
  							{
  								productList[list].map((title, j) => {
  									return (
  										<TouchableOpacity 
  											key={j}
  											onPress={() => this.props.navigation.navigate('Category', {title})} 
  											style={{width: '30%', height: 100, backgroundColor: '#f0f0f0', alignItems: 'center', justifyContent: 'center', marginBottom: 15}}>
  											<Text>{title}</Text>
                        <Image source={img} style={{resizeMode: 'stretch', width: 50, height: 50, overflow: 'hidden'}} />
  										</TouchableOpacity>
  									)
  								})
  							}
  							</View>
  						</View>
  					)
  				})
  			}
  		</ScrollView>
  	)
  }
}



const styles = StyleSheet.create({
  
});

export default connect(
	({productList}) => ({productList})
)(Products);