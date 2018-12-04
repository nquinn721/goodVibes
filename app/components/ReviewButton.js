import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import SvgUri from 'react-native-svg-uri';

export default class BottomMiddleShadow extends React.Component{
	render(){
		const { onPress = () => ({}) } = this.props;
		return (
			<View style={styles.container} pointerEvents="none">
				<TouchableOpacity style={styles.button}>
					<SvgUri source={require('goodVibes/assets/images/LogEx.svg')} fill='white' />
				</TouchableOpacity>
			</View>
        )
	}

}



const styles = StyleSheet.create({
	container:{
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Layout.primaryColor,
		borderRadius: 100,
		padding: 20,
		position: 'absolute',
		bottom: 20,
		right: 20
	}
})

