import React from 'react';
import {Image, Platform, StyleSheet, Text, View, } from 'react-native';
import { Card } from 'react-native-elements';

export default class ProductCard extends React.Component {

	render(){
		const {name, distance, totalRatings, img, stars, style} = this.props.data || this.props;

		return (
			<Card image={img || {}} containerStyle={style || {}}>
              	<Text style={styles.title}>{name || "Name"}</Text>
              	<Text style={styles.distance}>{distance || "N/A"} mi</Text>
              	<Text>{stars || "0"} Stars({totalRatings || "0"})</Text>
          	</Card>
		)
	}
}


const styles = StyleSheet.create({
  
  image: {
    borderColor: '#aaa',
    borderWidth: 1
  },
  distance: {
    color: '#aaa'
  },
  title: {
    fontWeight: '900'
  }
});