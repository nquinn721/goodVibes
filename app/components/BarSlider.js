import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Layout from 'goodVibes/constants/Layout';

export default class RoundedImage extends React.Component{
	render(){
		let { left, right, value } = this.props;

		return (
			<View style={styles.container}>
				<Text>{left}</Text>
				<View style={styles.bar}>
					<View style={styles.slider}></View>
					<View style={styles.centerLine}></View>
				</View>
				<Text>{right}</Text>
			</View>
        )
	}


}



const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	bar: {
		flexGrow: 4,
		backgroundColor: Layout.ice,
		height: 5,
		borderRadius: 2,
		marginTop: 5,
		marginHorizontal: 10
	},
	slider: {
		width: 27,
		height: 9,
		borderRadius: 100,
		backgroundColor: Layout.primaryColor,
		zIndex: 2,
		position: 'absolute',
		marginTop: -2,
		left: 20
	},
	centerLine: {
		position: 'absolute',
		height: 5,
		width: 1,
		backgroundColor: Layout.lightText,
		left: '50%'
	}
})

