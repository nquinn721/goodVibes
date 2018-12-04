import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
// import Image from 'react-native-image-progress';
import Config from 'goodVibes/constants/Config';
import BottomMiddleShadow from './BottomMiddleShadow';

export default class MainAd extends React.Component{
	render(){
		return (
			<View style={{height: 200, padding: 20, marginBottom: 80}}>
				<Text style={{textAlign: 'right', color: Layout.purple, fontSize: 16, marginBottom: 5}}>10% off on selected products</Text>
				<View>
		            <Image style={styles.adImage} source={require('goodVibes/assets/images/Home_smile_2x.jpg')} />
		            <View style={styles.learnMore}>
			            <Text style={styles.learnMoreText}>Learn More</Text>
		            </View>
		            <BottomMiddleShadow />
	            </View>
	        </View>
        )
	}

}



const styles = StyleSheet.create({
	adImage: {
		height: 200, 
		width: '100%', 
		borderRadius: 8,
	},
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
	},
	learnMore: {
		backgroundColor: Layout.pink, 
		padding: 15, 
		borderRadius: 5 , 
		position: 'absolute', 
		bottom: 0, 
		right: 0
	},
	learnMoreText: {
		textAlign: 'center', 
		fontSize: 16, 
		color: 'white', 
		
	}
})

