import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import Layout from 'goodVibes/constants/Layout';
import { Icon, Divider } from 'react-native-elements';
import AddToCartButton from 'goodVibes/components/AddToCartButton';
import BackButton from 'goodVibes/components/BackButton';
import StarRating from 'goodVibes/components/StarRating';
import HorizontalScrollCards from 'goodVibes/components/HorizontalScrollCards';

class Products extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
  	selectedStats: 'moods',
  	fade: new Animated.Value(0)
  }

  slide(stat, num){
  	Animated.timing(this.state[stat], {
  		toValue: num,
  		duration: 1000
  	}).start();
  }

  isInViewport(cb) {
  	if(!this.lastMood) return;


    this.lastMood.measure((x, y, width, height, pageX, pageY) => {
    	cb(Layout.window.height - pageY > y);
     })
  }

  onScroll(stats){
	this.isInViewport((inView) => {
		if(inView)
			this.animateStats();
	})
  }

  animateStats(){
  	const product = this.props.navigation.getParam('product'),
  		  stats = product[this.state.selectedStats];

  	Object.keys(stats).forEach(stat => {
	  	this.slide(`${stat}Slider`, stats[stat]);
	});
  }

  render() {
  	const product = this.props.navigation.getParam('product'),
	  	{
	  		name, 
	  		type, 
	  		img, 
	  		images, 
	  		rating, 
	  		totalRatings, 
	  		cost,
	  		description,
	  		addedToCart,
	  		moods
	  	} = product;


	const stats = product[this.state.selectedStats],
		selectedStats = this.state.selectedStats,
		{ products } = this.props.products;

		Object.keys(stats).forEach(stat => {
		  	this.state[`${stat}Slider`] = new Animated.Value(0);
		});


		this.isInViewport((inView) => {
			if(inView)
				this.animateStats();
		})


  	return (
  		<ScrollView onScroll={() => this.onScroll(stats)} style={styles.container}>
  			<BackButton color="black" navigation={this.props.navigation}/>
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
						<StarRating rating={rating} />
					</View>
					<View>
					{
						addedToCart ?
							(<View style={{backgroundColor: Layout.red, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 50, flexDirection: 'row', alignItems: 'center'}}>
								<Image source={require('goodVibes/assets/images/nav_bag.png')} style={{tintColor: 'white', width: 20, height: 20}}/>
	 							<Text style={{fontSize: 16, color: 'white'}}> In Bag</Text>
	 						</View>) :
	 						<View style={{flex: 1, padding: 5}}>  
								<Text style={{fontSize: 24, color: Layout.purple}}>${cost}</Text>
							</View>
					}
					</View>
				</View>
				<View style={{marginTop: 15, marginBottom: 10}}>
					<Text style={{color: Layout.mediumGrey}}>{description}</Text>
				</View>
		    	{/* END PRODUCT INFO */}


				{/* ADD CART BUTTON */}
				<AddToCartButton product={product} productScreen={true}/>
				{/*END ADD CART BUTTON */}


			</View>
			<Divider style={{ backgroundColor: Layout.lightGrey }} />
			<View style={{padding: 20}}>


				{/* MOODS/MEDICAL/CONS REVIEWS */}
				<View>
					<View style={{marginBottom: 15, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
						<TouchableOpacity style={(selectedStats === 'moods' && styles.selectedTitleView)} onPress={() => this.setState({selectedStats: 'moods'}) && this.animateStats()}>
							<Text style={[styles.statTitle, (selectedStats === 'moods' && styles.selectedTitle)]}>Moods</Text>
						</TouchableOpacity>
						<TouchableOpacity style={(selectedStats === 'medical' && styles.selectedTitleView)} onPress={() => this.setState({selectedStats: 'medical'}) && this.animateStats()}>
							<Text style={[styles.statTitle, (selectedStats === 'medical' && styles.selectedTitle)]}>Medical</Text>
						</TouchableOpacity>
						<TouchableOpacity style={(selectedStats === 'cons' && styles.selectedTitleView)} onPress={() => this.setState({selectedStats: 'cons'}) && this.animateStats()}>
							<Text style={[styles.statTitle, (selectedStats === 'cons' && styles.selectedTitle)]}>Cons</Text>
						</TouchableOpacity>
					</View>
					<View>
						{
							Object.keys(stats).map((mood, i) => {
								return (
									<View key={i} ref={(el) => {
										if(i == 3)
											this.lastMood = el
									}}>
										<Text style={{fontSize: 14, color: Layout.darkGrey, paddingBottom: 5, fontStyle: 'italic'}}>{mood}</Text>
										<View style={[{height: 5, backgroundColor: Layout.lightGrey, marginBottom: 10}, styles.rounded]}>
											<Animated.View style={[styles.rounded, 
												{
													justifyContent: 'center', 
													paddingLeft: 10, 
													height: 5, 
													backgroundColor: Layout.purple, 
													width: this.state[`${mood}Slider`]
															.interpolate({
																inputRange: [0, 10], 
																outputRange: ['0%', '100%']
															})
												}
											]}></Animated.View>
										</View>
									</View>
								)
							})
							
						}

					</View>
				</View>
				{/* END MOODS/MEDICAL/CONS REVIEWS */}


			</View>
			<Divider style={{ backgroundColor: Layout.lightGrey }} />
			<View style={{padding: 20}}>


			{/* RATING */}
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
					<View>
						<Text style={{fontSize: 16, marginBottom: 5}}>
							<Text style={{color: Layout.purple, fontWeight: '800'}}>{rating}</Text>
							<Text style={{color: Layout.mediumGrey}}> stars</Text>
						</Text>
						<View style={{flexDirection: 'row'}}>
							<StarRating rating={rating} />
							<Text style={{color: Layout.mediumGrey}}>{totalRatings}</Text>
							<Icon name="user" type='feather' color={Layout.mediumGrey} size={16}/>
						</View>
					</View>
					<View>
						<Icon name="ios-arrow-forward" type="ionicon" size={20} color={Layout.mediumGrey}/>
					</View>

				</View>

			{/* END RATING */}

			</View>
			<Divider style={{ backgroundColor: Layout.lightGrey }} />
			<View style={{padding: 20, paddingRight: 0}}>


				
			{/* RELATED PRODUCTS */}
			<HorizontalScrollCards isProduct={true} title="Related Products" data={products} onPress={(product) => this.props.navigation.navigate('Product', {product})} />
			{/* END RELATED PRODUCTS */}


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
  },
  selectedTitle: {
  	fontWeight: '800',
  	paddingBottom: 5
  },
  selectedTitleView: {
  	borderBottomColor: Layout.purple,
  	borderBottomWidth: 2,
  },
  statTitle: {
  	fontSize: 15, 
  	color: Layout.purple,
  }
});

export default connect(
	({products}) => ({products})
)(Products);