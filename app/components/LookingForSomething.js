import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Layout from 'goodVibes/constants/Layout';

export default class LookingForSomething extends React.Component{
	render(){

		return (
			<View style={styles.container}>
				<Text style={{color: Layout.lightText, paddingBottom: 10}}>Looking for something else?</Text>
				<Text style={{fontSize: 14, color: Layout.secondaryColor}}>Find it with GoodVibes Search</Text>
				<TouchableOpacity>
					<Text style={{fontSize: 14, color: Layout.primaryColor}}>Show Me</Text>
				</TouchableOpacity>
			</View>
        )
	}

}



const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		padding: 20,
		...Layout.cardShadow,
		backgroundColor: 'white'
	}
})

