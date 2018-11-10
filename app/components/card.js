import React from 'react';
import { Image, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, removeFromCart } from 'goodVibes/redux/actions/cart.action';
import AddToCartButton from './addToCartButton';

/*

<Card data={data} style={style} onPress={onPressMethod} />

-- onPress returns the data to parent

// Possible Properties
data = {
	name: String,
	distance: Int,
	totalRatings: Int,
	img: String,
	stars: Int,
	addedToCart: Boolean,
	canAddToCart: Boolean,
	type: String
	image_url: String
}

*/

class ProductCard extends React.Component {

	render(){
		const {
			name, 
			distance, 
			totalRatings, 
			img,
			image_url,
			rating, 
			addedToCart, 
			canAddToCart,
			review_count,
			type
		} = this.props.data;
		const { style } = this.props;
		const { dontAddToCart } = this.props;

		return (
			<View style={style || {}}>
                <TouchableOpacity onPress={this.props.onPress ? this.props.onPress.bind(this.props, this.props.data) : (() => {})}>
					<Card image={(img || image_url) ? {uri: img || image_url} : {}} containerStyle={style || {}}>
		              	<Text style={styles.title}>{name || "Name"}</Text>
		              	<Text style={styles.distance}>{distance || type || "N/A"}</Text>
		              	<Text>{rating || "0"} Stars({totalRatings || review_count || "0"})</Text>
		          	</Card>
                </TouchableOpacity>

	          	{
	          		canAddToCart && !dontAddToCart && <AddToCartButton product={this.props.data} style={styles.addToCart}/>

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