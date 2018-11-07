import React from 'react';
import {Image, Platform, StyleSheet, Text, View, } from 'react-native';

export default class ProductCard extends React.Component {

	render(){
		const {totalItems} = this.props.data || this.props;

		return (
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