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
						<Text style={{color: Layout.lightText}}>Logged</Text>
						:
						<Text style={{color: Layout.purple}}>Log Experience</Text>
				}
			</TouchableOpacity>
		)
	}
}



export default connect(
	// ({products}) => ({products}),
	// (dispatch) => (bindActionCreators({addToCart, removeFromCart}, dispatch))
)(LogExperienceButton);