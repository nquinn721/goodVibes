import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';

/*


*/

class BackButton extends React.Component{
	render(){
		return (
			<TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}> 
				<Image source={require('goodVibes/assets/images/back.png')} style={{tintColor: (this.props.color || "white")}} />
			</TouchableOpacity>
		)
	}
}
const styles = StyleSheet.create({
	backButton: {
		position: 'absolute',
		zIndex: 1,
		top: 10,
		left: 10
	}
})


export default connect(
	// ({products}) => ({products}),
	// (dispatch) => (bindActionCreators({addToCart, removeFromCart}, dispatch))
)(BackButton);