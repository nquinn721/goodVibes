import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import { BlurView } from 'expo';

export default class BottomMiddleShadow extends React.Component{
	render(){
		const { intensity, size } = this.props;
		return (
			<View style={styles.container}>
				<BlurView tint="dark" intensity={10} style={styles.imageShadow}>
				</BlurView>
			</View>
        )
	}

}



const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: 6,
		position: 'absolute',
		zIndex: -1
	},
	imageShadow: {
		height: 6,
		width: '50%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10
	},
	imageShadowShadow: {
		height: 6,
		width: '20%',
		borderRadius: 10
	}
})

