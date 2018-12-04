import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import Config from 'goodVibes/constants/Config';
import BottomMiddleShadow from './BottomMiddleShadow';

export default class MainAd extends React.Component{
	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>Hey Simon, we are throwing a party near you!</Text>
				<View style={styles.ad}>
					<View style={{height: 300, borderTopLeftRadius: 5, borderTopRightRadius: 5, overflow: 'hidden'}}>
						<View style={{height: 20}}>
							<Image style={styles.adImage} source={require('goodVibes/assets/images/SummerVibes_4x.jpg')} />
						</View>
						<Text style={styles.join}>Join the party</Text>
					</View>
					<View style={{backgroundColor: 'white', padding: 10, alignItems: 'center', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
						<Text style={{color: Layout.red}}>Summer Vibes in BK</Text>
						<Text>Jan 2 at Brooklyn Bowl</Text>
					</View>
					<BottomMiddleShadow intensity={2} size={2}/>
				</View>
	        </View>
        )
	}

}



const styles = StyleSheet.create({
	container: {
		marginVertical: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText: {
		color: Layout.purple,
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 15
	},
	ad: {
		justifyContent: 'center',
		width: '50%',
		
	},
	adImage: {
		height: 300,
		width: '100%',
	},
	join: {
		backgroundColor: Layout.pink, 
		padding: 15, 
		borderRadius: 5,
		marginHorizontal: 20,
		alignItems: 'center',
		color: 'white'
	}
})

