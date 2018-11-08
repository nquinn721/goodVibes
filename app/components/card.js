import React from 'react';
import { Image, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, removeFromCart } from 'goodVibes/redux/actions/cart.action';
import AddToCartButton from './addToCartButton';

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
		console.log(img);
		const { style } = this.props;

		return (
			<View style={style || {}}>
                <TouchableOpacity onPress={this.props.onPress ? this.props.onPress.bind(this.props, this.props.data) : (() => {})}>
					<Card image={img ? {uri: img} : {}} containerStyle={style || {}}>
		              	<Text style={styles.title}>{name || "Name"}</Text>
		              	<Text style={styles.distance}>{distance || type || "N/A"}</Text>
		              	<Text>{stars || "0"} Stars({totalRatings || "0"})</Text>
		          	</Card>
                </TouchableOpacity>

	          	{
	          		canAddToCart && <AddToCartButton product={this.props.data} style={styles.addToCart}/>

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
	(dispatch) => (bindActionCreators({addToCart, removeFromCart}, dispatch))
)(ProductCard);