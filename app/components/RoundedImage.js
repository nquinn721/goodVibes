import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Layout from 'goodVibes/constants/Layout';

export default class RoundedImage extends React.Component{
	render(){
		let { source } = this.props,
			width = this.setWidthOfImage();

		return (
			<View style={[styles.image, {borderRadius: this.setBorderRadiusForImage()}]}>
				<Image source={source} style={{width: width, height: 85}}/>
			</View>
        )
	}

	setBorderRadiusForImage(){
		const { type } = this.props;
		return(
			(/product|dispensaries/).test(type) ? 10 : 100
		)
	}

	setWidthOfImage(){
		const { type } = this.props;
		return(
			(/dispensaries/).test(type) ? 120:  85
		)
	}

}



const styles = StyleSheet.create({
	image: {
		overflow: 'hidden'
	},
})

