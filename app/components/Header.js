import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Layout from 'goodVibes/constants/Layout';

/*
 * <GreenHeader
 *		title={String} // required
 *		navigation={NavigationObject} // required
 *		rightIcon={String}  
 *		style={Object}
 *		showTitle={Boolean}
 *		short={Boolean}
 *		/>
 */

export default class Header extends React.Component{
	state = {
		fadeAnim: new Animated.Value(0)
	}

	componentDidMount(){
		const { sticky } = this.props;

		if(sticky){
			Animated.timing(                  
		      this.state.fadeAnim,            
		      {
		        toValue: 1,                  
		        duration: 300,             
		      }
		    ).start();  
			
		}
	}
	render(){
		let { 
			title, 
			rightIcon, 
			navigation, 
			style={}, 
			textStyle={}, 
			showTitle, 
			short, 
			back,
			sticky
		} = this.props;

        return (
        	<Animated.View style={[styles.container, style, (short && {height: 50}), (sticky && {opacity: this.state.fadeAnim, ...styles.sticky})]}>
        		<TouchableOpacity onPress={() => back ? back() : navigation.goBack()} style={{paddingLeft: 20}}>
	        		<SvgUri source={require('goodVibes/assets/images/Back.svg')} fill="white"/>
	        	</TouchableOpacity>
        		{showTitle && <Text style={[styles.titleText, textStyle]}>{title}</Text>}
        		{
        			rightIcon === 'edit' ?
        			<SvgUri source={require('goodVibes/assets/images/Edit_s.svg')} fill="white" width={20} height={20} />:
        			rightIcon === 'camera' ?
        			<SvgUri source={require('goodVibes/assets/images/Camera.svg')} fill="white" width={20} height={20} />:
        			<SvgUri source={require('goodVibes/assets/images/Heart.svg')} fill="white"/>
        		}
        	</Animated.View>
        )
	}


}



const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 20,
		paddingTop: 14,
		backgroundColor: Layout.primaryColor,
		height: 80
	},
	titleText: {
		color: 'white',
		fontSize: 17,
		fontFamily: 'sfpromedium'
	},
	sticky: {
		position: 'absolute', 
		top: 0, 
		left: 0, 
		right: 0, 
		zIndex: 1
	}
	
})

