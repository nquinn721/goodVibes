import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import Image from 'react-native-image-progress';
import Config from 'goodVibes/constants/Config';

export default class MainAd extends React.Component{
	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>Hey Simon, we are throwing a party near you!</Text>
				<Image style={styles.ad} source={{uri: 'https://northstatesigns.com/wp-content/uploads/2017/06/Talking-Tables-Illuminations-Party-light-Christmas-lifestyle-Portrait.png'}} />
				<Text style={styles.join}>Join the party</Text>
	        </View>
        )
	}

}



const styles = StyleSheet.create({
	container: {
		marginVertical: 50,
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerText: {
		color: Layout.purple,
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 15
	},
	ad: {
		height: 300,
		width: '50%'
	},
	join: {
		backgroundColor: Layout.pink, 
		padding: 15, 
		borderRadius: 5, 
		position: 'absolute',
		top: 50,
		left: 130,
		color: 'white'
	}
})

