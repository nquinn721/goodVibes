import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Layout from 'goodVibes/constants/Layout';

export default class RoundedImage extends React.Component{
	render(){
		let { title, rightIcon } = this.props;

        return (
        	<View style={styles.container}>
        		<SvgUri source={require('goodVibes/assets/images/Back.svg')} fill="white"/>
        		<Text style={styles.titleText}>{title}</Text>
        		<SvgUri source={require('goodVibes/assets/images/Heart.svg')} fill="white" />
        	</View>
        )
	}


}



const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		backgroundColor: Layout.primaryColor,
		height: 80
	},
	titleText: {
		color: 'white'
	}
	
})

