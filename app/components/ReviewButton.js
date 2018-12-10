import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import SvgUri from 'react-native-svg-uri';

export default class ReviewButton extends React.Component{
	state = {
		position: new Animated.Value(20)
	}

	animate(){
		const { show } = this.props;
		if(show){
			Animated.timing(                  
		      this.state.position,            
		      {
		        toValue: -100,                  
		        duration: 300,             
		      }
		    ).start();  
		}else{
			Animated.timing(                  
		      this.state.position,            
		      {
		        toValue: 20,                  
		        duration: 300,             
		      }
		    ).start();  
		}
	}

	render(){
		const { onPress=() => ({}), show } = this.props;

		this.animate();

		return (
			<Animated.View style={[styles.container, {bottom: this.state.position}]} pointerEvents="none">
				<TouchableOpacity style={styles.button}>
					<SvgUri source={require('goodVibes/assets/images/LogEx.svg')} fill='white' />
				</TouchableOpacity>
			</Animated.View>
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

