import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from 'goodVibes/constants/Layout';

export default class BottomMiddleShadow extends React.Component{
	render(){
		const { intensity, size } = this.props;
		return (
	        <View style={[styles.imageShadow, (intensity && {shadowRadius: intensity * 10}), (size && {shadowOffset: {height: size}})]}></View>
        )
	}

}



const styles = StyleSheet.create({
	imageShadow: {
		shadowOffset: {  width: 0,  height: 10,  },
		shadowColor: 'black',
		shadowOpacity: .7,
		shadowRadius: 10,
		position: 'absolute',
		bottom: 0,
		height: 10,
		width: '76%',
		marginLeft: '12%',
		zIndex: -1,
		backgroundColor: Layout.container.backgroundColor
	}
})

