import React from 'react';
import { Image, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from 'goodVibes/redux/actions/cart.action';

class ProductCard extends React.Component {

	render(){
		const {
			name, 
			distance, 
			totalRatings, 
			img, 
			stars, 
			addedToCart, 
			canAddToCart,
			type
		} = this.props.data;

		const { style } = this.props;

		return (
			<View style={style || {}}>
                <TouchableOpacity onPress={this.props.onPress ? this.props.onPress.bind(this.props, this.props.data) : (() => {})}>
					<Card image={img ? img : {}} containerStyle={style || {}}>
		              	<Text style={styles.title}>{name || "Name"}</Text>
		              	<Text style={styles.distance}>{distance || type || "N/A"}</Text>
		              	<Text>{stars || "0"} Stars({totalRatings || "0"})</Text>
		          	</Card>
                </TouchableOpacity>

	          	{
	          		canAddToCart && 
		          	<TouchableOpacity style={[styles.addToCart, addedToCart && styles.addedToCart]} onPress={() => this.props.addToCart(this.props.data)}>
		          		<Icon name="cart-plus" type="font-awesome" size={20} color={(addedToCart ? 'white' : 'black')} />
		          		<Text style={[addedToCart && {color: 'white'}]}> Add to Cart</Text>
		          	</TouchableOpacity>
	          	}
	        </View>
		)
	}
}


const styles = StyleSheet.create({
  addToCart: {
  	marginLeft: 14, 
  	marginRight: 14, 
  	borderBottomWidth: 2, 
  	borderRightWidth: 2, 
  	borderLeftWidth: 2, 
  	borderColor: '#eee', 
  	flexDirection: 'row',
  	justifyContent: 'center',
  	padding: 5,
  	alignItems: 'center'
  },
  image: {
    borderColor: '#aaa',
    borderWidth: 1
  },
  addedToCart: {
  	backgroundColor: '#43c682'
  },
  distance: {
    color: '#aaa'
  },
  title: {
    fontWeight: '900'
  }
});

export default connect(
	(state) => ({}),
	(dispatch) => (bindActionCreators({addToCart}, dispatch))
)(ProductCard);