import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import Layout from 'goodVibes/constants/Layout';
import { Icon } from 'react-native-elements';
import AddToCartButton from 'goodVibes/components/addToCartButton';

class Products extends React.Component {
  static navigationOptions = {
    title: '',
  };

  render() {
  	const product = this.props.navigation.getParam('product'),
	  	{
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
	  	} = product;

  	return (
  		<ScrollView style={styles.container}>

  		    {/* PRODUCT IMAGES */}
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
  		    {/* END PRODUCT IMAGES */}

			<View style={{padding: 20}}>

			    {/* PRODUCT INFO */}
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
					<View style={{flexWrap: 'wrap', flex: 1}}>
						<Text style={{fontSize: 20, color: Layout.purple}}>{name}</Text>
						<Text style={{color: Layout.lightText}}>{type}</Text>
						<Text style={{color: Layout.gold}}>{stars} stars ({totalRatings})</Text>
					</View>
					<View>
					{
						addedToCart ?
							(<View style={{backgroundColor: Layout.green, padding: 5, borderRadius: 5}}>
	 							<Text style={{fontSize: 24, color: 'white'}}>${cost}</Text>
	 							<View style={{flexDirection: 'row'}}>
	 								<Text style={{fontSize: 10, color: 'white'}}>In Cart</Text>
	 								<Icon name="check" color="white" size={10} />
	 							</View>
	 						</View>) :
	 						<View style={{flex: 1, padding: 5}}>  
								<Text style={{fontSize: 24, color: Layout.purple}}>${cost}</Text>
							</View>
					}
					</View>
				</View>
				<View style={{marginTop: 15, marginBottom: 10}}>
					<Text>{description}</Text>
				</View>
		    	{/* END PRODUCT INFO */}


				{/* ADD CART BUTTON */}
				<AddToCartButton product={product}/>
				{/*END ADD CART BUTTON */}
				

				{/* MOODS/MEDICAL/CONS REVIEWS */}
				<View style={{marginTop: 25}}>
					<Text style={{fontSize: 15, color: Layout.purple, marginBottom: 15}}>Moods</Text>
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
				{/* END MOODS/MEDICAL/CONS REVIEWS */}


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
	({products}) => ({products})
)(Products);