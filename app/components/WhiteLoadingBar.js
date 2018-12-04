import React from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import Layout from 'goodVibes/constants/Layout';

export default class WhiteLoadingBar extends React.Component{
	state = {
	  	left: new Animated.Value(0)

	}
	slide(){
	  	Animated.timing(this.state.left, {
	  		toValue: Layout.window.width,
	  		duration: 1000
	  	}).start(() => {
	  		this.setState({left: new Animated.Value(0)})
	  	});
	}
	render(){
		this.slide();
        return (
        	<Animated.View style={[styles.container, {left: this.state.left}]}>
        	</Animated.View>
       	);
	}


}



const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		backgroundColor: 'rgba(255,255,255,0.6)',
		top: 0,
		bottom: 0,
		width: 5,
		left: 0,
		zIndex: 999
	}
	
})

