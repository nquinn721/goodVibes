import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Layout from 'goodVibes/constants/Layout';

/*
 * <GreenHeader
 *		title={String}
 *		rightIcon={String}
 *		navigation={NavigationObject} />
 */

export default class GreenHeader extends React.Component{
	render(){
		let { title, rightIcon, navigation } = this.props;

        return (
        	<View style={styles.container}>
        		<TouchableOpacity onPress={() => navigation.goBack()}>
	        		<SvgUri source={require('goodVibes/assets/images/Back.svg')} fill="white"/>
	        	</TouchableOpacity>
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

