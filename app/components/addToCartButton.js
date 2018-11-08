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
					<TouchableOpacity style={[(this.props.style || {borderColor: Layout.purple, padding: 5, borderWidth: 1}), {backgroundColor: Layout.green}]} onPress={() => this.props.removeFromCart(product)}>
						<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
							<Text style={{color: 'white'}}>In Cart </Text>
							<Icon name="check" size={30} color="white"/>
						</View>
					</TouchableOpacity>
					:
					<TouchableOpacity style={(this.props.style || {borderColor: Layout.purple, padding: 5, borderWidth: 1})} onPress={() => this.props.addToCart(product)}>
						<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
							<Icon type="font-awesome" name="cart-plus" size={30} />
							<Text> Add to Cart</Text>
						</View>
					</TouchableOpacity>
				}
			</View>
		)
	}
}



export default connect(
	({products}) => ({products}),
	(dispatch) => (bindActionCreators({addToCart, removeFromCart}, dispatch))
)(AddToCartButton);