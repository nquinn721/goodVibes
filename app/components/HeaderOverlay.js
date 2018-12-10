import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Layout from 'goodVibes/constants/Layout';

/*
 * <GreenHeader
 *		navigation={Navigation} // required
 *		/>
 */

export default class HeaderOverlay extends React.Component{

	render(){
		const { navigation } = this.props;

        return (
        	<View style={{height: 40, position: 'absolute', zIndex: 1, width: '100%', padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <SvgUri source={require('goodVibes/assets/images/Back.svg')} fill="black"/>
                </TouchableOpacity>
                <SvgUri source={require('goodVibes/assets/images/Heart.svg')} fill="black" />
          </View>
        )
	}


}



const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 20,
		paddingTop: 14,
		backgroundColor: Layout.primaryColor,
		height: 80
	},
	titleText: {
		color: 'white',
		fontSize: 17,
		fontFamily: 'sfpromedium'
	},
	sticky: {
		position: 'absolute', 
		top: 0, 
		left: 0, 
		right: 0, 
		zIndex: 1
	}
	
})

