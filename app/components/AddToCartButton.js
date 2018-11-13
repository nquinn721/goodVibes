import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import { Icon } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { addToCart, removeFromCart } from 'goodVibes/redux/actions/cart.action';

/*

<AddToCartButton product={product} style={styles} />

// Expected Properties
product = {
	addedToCart: Boolean
}

*/

class AddToCartButton extends React.Component{
	render(){
		const { product } = this.props;

		return (
			<View> 
				{
					product.addedToCart ? 
					<TouchableOpacity style={styles.addedToCart} onPress={() => this.props.removeFromCart(product)}>
						<Text style={{color: 'white'}}>In Cart </Text>
						<Icon name="check" size={30} color="white"/>
					</TouchableOpacity>
					:
					<TouchableOpacity style={styles.cart} onPress={() => this.props.addToCart(product)}>
						<Text style={{color: Layout.red}}> Add to Bag</Text>
					</TouchableOpacity>
				}
			</View>
		)
	}
}

const cartStyles = {
	margin: 15, 
	paddingTop: 10,
	flexDirection: 'row', 
	alignItems: 'center', 
	justifyContent: 'center',
	borderTopWidth: 1,
	borderTopColor: '#f0f0f0'
}
const styles = StyleSheet.create({
	cart: cartStyles,
	addedToCart: {
		...cartStyles,
		backgroundColor: Layout.red,
		margin: 0
	}
})


export default connect(
	({products}) => ({products}),
	(dispatch) => (bindActionCreators({addToCart, removeFromCart}, dispatch))
)(AddToCartButton);