import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Layout from 'goodVibes/constants/Layout';

export default class RoundedButton extends React.Component{
	render(){
		return (
			<TouchableOpacity style={Layout.roundedButton} onPress={this.props.onPress}>
	            <Text style={{color: Layout.darkGrey}}>{this.props.text} </Text>
	            <Icon name={this.props.icon} type={this.props.type || ''} size={20} color={Layout.darkGrey}/>
	        </TouchableOpacity>
        )
	}

}



const styles = StyleSheet.create({
})

