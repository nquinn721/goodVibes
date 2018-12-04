import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';

/*

<LogExperienceButton product={product} style={styles} />

*/

class LogExperienceButton extends React.Component{
	render(){
		const { product } = this.props;

		return (
			<TouchableOpacity onPress={() => this.props.removeFromCart(product)}>
				{
					product.loggedexperience ? 
						<Text style={styles.loggedExperience}>Logged</Text>
						:
						<Text style={styles.logExperience}>Log Experience</Text>
				}
			</TouchableOpacity>
		)
	}
}

const baseStyle = {
	padding: 10,
	backgroundColor: 'white',
	borderTopWidth: 1,
	borderTopColor: Layout.lightText
}
const styles = StyleSheet.create({
	logExperience: {
		color: Layout.lightText,
		...baseStyle
	},
	loggedExperience: {
		color: Layout.purple,
		...baseStyle
	}
})


export default connect(
	// ({products}) => ({products}),
	// (dispatch) => (bindActionCreators({addToCart, removeFromCart}, dispatch))
)(LogExperienceButton);