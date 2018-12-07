import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Layout from 'goodVibes/constants/Layout';

/**
 * <MainButton text={String} onPress={Function} style={Object} textStyle={Object} />
 */

export default class MainButton extends React.Component{
	state = {
		pressed: false
	}

	render(){
		const { text, style = {}, textStyle = {}, onPress = () => ({}) } = this.props;
		return (
			<TouchableOpacity style={[styles.container, (this.state.pressed && styles.pressedContainer), style]} onPress={() => {
				this.setState({pressed: !this.state.pressed});
				onPress && onPress(text);
			}}>
				<Text style={[{fontSize: 14, color: (this.state.pressed ? 'white' : Layout.primaryColor)}, textStyle]}>{text}</Text>
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
	},
	pressedContainer: {
		backgroundColor: Layout.primaryColor,
		borderColor: 'white'
	}
})

