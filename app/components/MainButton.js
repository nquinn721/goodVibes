import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Layout from 'goodVibes/constants/Layout';

export default class BottomMiddleShadow extends React.Component{
	render(){
		const { text, onPress = () => ({}) } = this.props;
		return (
			<TouchableOpacity style={styles.container}>
				<Text style={{fontSize: 14, color: Layout.primaryColor}}>{text}</Text>
			</TouchableOpacity>
        )
	}

}



const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: Layout.thirdaryColor,
		borderWidth: 1,
		borderRadius: 18,
		width: 90,
		height: 35
	}
})

