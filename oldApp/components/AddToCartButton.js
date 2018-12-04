import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import { Icon } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { addToCart, removeFromCart } from 'goodVibes/redux/actions/cart.action';

const bag = require('goodVibes/assets/images/nav_bag.png');

/*

<AddToCartButton product={product} style={styles} />

// Expected Properties
product = {
	addedToCart: Boolean
}

*/

class AddToCartButton extends React.Component{
	render(){
		const { product, productScreen } = this.props;

		return (
			<View> 
				{
					product.addedToCart ? 
					<TouchableOpacity style={(productScreen ? styles.productScreenAdded : styles.addedToCart)} onPress={() => this.props.removeFromCart(product)}>
						<Image source={bag} style={{tintColor: 'white', width: 25, height: 25}}/>
						<Text style={{color: 'white', fontWeight: '800'}}> In Bag</Text>
					</TouchableOpacity>
					:
					<TouchableOpacity style={(productScreen ? styles.productScreen : styles.cart)} onPress={() => this.props.addToCart(product)}>
						<Text style={{color: Layout.red, fontWeight: '800'}}> Add to Bag</Text>
					</TouchableOpacity>
				}
			</View>
		)
	}
}

const cartStyles = {
	padding: 10,
	flexDirection: 'row', 
	alignItems: 'center', 
	height: 40,
	justifyContent: 'center',
	borderTopWidth: 1,
	borderTopColor: '#f0f0f0'
}
const productScreenStyles = {
	borderWidth: 1,
	borderColor: Layout.red,
	padding: 10,
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'row',
	marginTop: 15,
	height: 40,
	marginBottom: 15
}
const styles = StyleSheet.create({
	cart: cartStyles,
	addedToCart: {
		...cartStyles,
		backgroundColor: Layout.red,
	},
	productScreen: productScreenStyles,
	productScreenAdded: {
		...productScreenStyles,
		backgroundColor: Layout.red,
	}
})


export default connect(
	({products}) => ({products}),
	(dispatch) => (bindActionCreators({addToCart, removeFromCart}, dispatch))
)(AddToCartButton);