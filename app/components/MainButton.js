import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Layout from 'goodVibes/constants/Layout';

/**
 * <MainButton text={String} onPress={Function} />
 */

export default class MainButton extends React.Component{
	state = {
		pressed: false
	}

	render(){
		const { text, onPress = () => ({}) } = this.props;
		return (
			<TouchableOpacity style={[styles.container, (this.state.pressed && styles.pressedContainer)]} onPress={() => {
				this.setState({pressed: !this.state.pressed});
				onPress && onPress();
			}}>
				<Text style={{fontSize: 14, color: (this.state.pressed ? 'white' : Layout.primaryColor)}}>{text}</Text>
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
	},
	pressedContainer: {
		backgroundColor: Layout.primaryColor,
		borderColor: 'white'
	}
})

