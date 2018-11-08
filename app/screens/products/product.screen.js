import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import Layout from 'goodVibes/constants/Layout';
import { Icon } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { addToCart } from 'goodVibes/redux/actions/cart.action';

class Products extends React.Component {
  static navigationOptions = {
    title: '',
  };

  render() {
  	const {
  		name, 
  		type, 
  		img, 
  		images, 
  		stars, 
  		totalRatings, 
  		cost,
  		description,
  		addedToCart,
  		moods
  	} = this.props.navigation.getParam('product');

  	return (
  		<ScrollView style={styles.container}>
  		  	<View style={styles.swiper}>
				<Swiper>
					{
						images.map((image, i) => {
							return (
								<View key={i}>
									<Image 
									style={{width: Layout.width, height: 250}} 
									source={{uri: image}} />
								</View>
							)
						})
					}
				</Swiper>
		  	</View>
			<View style={{padding: 20}}>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
					<View>
						<Text style={{fontSize: 20, color: '#1e1254'}}>{name}</Text>
						<Text style={{color: '#bababa'}}>{type}</Text>
						<Text style={{color: '#ffb900'}}>{stars} stars ({totalRatings})</Text>
					</View>
					<View>
					{
						addedToCart ?
							(<View style={{backgroundColor: '#43c682', padding: 5, borderRadius: 5}}>
	 							<Text style={{fontSize: 24, color: 'white'}}>${cost}</Text>
	 							<View style={{flexDirection: 'row'}}>
	 								<Text style={{fontSize: 10, color: 'white'}}>In Cart</Text>
	 								<Icon name="check" color="white" size={10} />
	 							</View>
	 						</View>) :
							<Text style={{fontSize: 24, color: '#1e1254'}}>${cost}</Text>
					}
					</View>
				</View>
				<View style={{marginTop: 15, marginBottom: 10}}>
					<Text>{description}</Text>
				</View>
				<TouchableOpacity style={{borderColor: '#1e1254', padding: 5, borderWidth: 1, marginTop: 15}} onPress={() => this.props.addToCart(this.props.navigation.getParam('product'))}>
					<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
						<Icon type="font-awesome" name="cart-plus" size={30} />
						<Text> Add to Cart</Text>
					</View>
				</TouchableOpacity>


				<View style={{marginTop: 25}}>
					<Text style={{fontSize: 15, color: '#1e1254', marginBottom: 15}}>Moods</Text>
					<View>
						{
							Object.keys(moods).map((mood, i) => {
								return (
									<View key={i} style={[{height: 30, backgroundColor: '#eee', marginBottom: 10}, styles.rounded]}>
										<View style={[styles.rounded, {justifyContent: 'center', paddingLeft: 10, height: 30, backgroundColor: '#999', width: ((moods[mood] * 10) + '%')}]}>
											<Text style={{fontSize: 20, color: 'white'}}>{mood}</Text>
										</View>
									</View>
								)
							})
							
						}

					</View>
				</View>
			 </View>
  		</ScrollView>
  	)
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  swiper: {
  	height: 250
  },
  rounded: {
  	borderTopRightRadius: 20, 
  	borderBottomRightRadius: 20
  }
});

export default connect(
	({products}) => ({products}),
	(dispatch) => (bindActionCreators({addToCart}, dispatch))
)(Products);